class Article < ApplicationRecord
  validates :title, uniqueness: true
  validates :title, :content, presence: true
end
