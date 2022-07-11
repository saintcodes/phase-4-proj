class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :game_id
      t.integer :venue_id
      t.integer :created_by
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
