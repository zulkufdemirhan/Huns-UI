# frozen_string_literal: true

# Main
class HomeController < ApplicationController
  before_action :set_color

  def home
    @palette = Paleta::Palette.generate(type: :shades, from: :color, size: 5, color:)
  end

  private

  attr_reader :color

  def set_color
    selected_color = params[:color]
    selected_color = selected_color.present? ? selected_color : 'ffffff'
    @color         = Paleta::Color.new(:hex, selected_color)
  end
end
