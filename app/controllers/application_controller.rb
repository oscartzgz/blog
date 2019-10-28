class ApplicationController < ActionController::Base
  after_action :flash_to_headers

  def flash_to_headers
    return unless request.xhr?
    return if flash_message.nil?
    response.headers['X-Message'] = flash_message.encode('Windows-1252') unless flash_message.nil?
    response.headers['X-Message-Type'] = flash_type.to_s unless flash_message.nil?
    flash.discard
  end

  private
  FLASH_TYPES = [:error, :warning, :notice]
  def flash_message
    FLASH_TYPES.each do |type| 
      return flash[type] unless flash[type].blank?
    end
  end

  def flash_type
    FLASH_TYPES.each do |type|
      return type unless flash[type].blank?
    end  
  end
end
