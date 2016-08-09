require 'test_helper'
include Warden::Test::Helpers

class TweetsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  fixtures :users

  def setup
    @user = users(:one)
  end

  test "Tweet creation" do
    login_as @user
    params = {body: "Oh mama!", user_id: @user.id }
    post "/tweets", params: params
    follow_redirect!
    assert_equal 500, status
  end
end
