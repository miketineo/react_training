require 'test_helper'
include Warden::Test::Helpers

class ProfileControllerTest < ActionDispatch::IntegrationTest
  fixtures :users

  def setup
    @user = users(:one)
  end

  test "should get index" do
    login_as @user

    get "/profile"
    assert_response :success
  end

end
