export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      feedback: {
        Row: {
          created_at: string
          email: string | null
          id: number
          message: string | null
          name: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          message?: string | null
          name?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          message?: string | null
          name?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      prices_cereal: {
        Row: {
          business_name: string | null
          created_at: string
          current: boolean | null
          farm_to_farm: boolean
          id: number
          post_code: number | null
          price: number
          region: number
          sale_date: string
          user_id: string | null
          variety: number
          verified: boolean
        }
        Insert: {
          business_name?: string | null
          created_at?: string
          current?: boolean | null
          farm_to_farm: boolean
          id?: number
          post_code?: number | null
          price: number
          region: number
          sale_date: string
          user_id?: string | null
          variety: number
          verified?: boolean
        }
        Update: {
          business_name?: string | null
          created_at?: string
          current?: boolean | null
          farm_to_farm?: boolean
          id?: number
          post_code?: number | null
          price?: number
          region?: number
          sale_date?: string
          user_id?: string | null
          variety?: number
          verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "prices_cereal_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      prices_current: {
        Row: {
          created_at: string
          price: number
          region_item_variety: number
        }
        Insert: {
          created_at?: string
          price: number
          region_item_variety: number
        }
        Update: {
          created_at?: string
          price?: number
          region_item_variety?: number
        }
        Relationships: []
      }
      prices_summary: {
        Row: {
          created_at: string
          id: number
          item: number
          month: number
          price: number
          region: number
          variety: number
          year: number
        }
        Insert: {
          created_at?: string
          id?: number
          item: number
          month: number
          price: number
          region: number
          variety: number
          year: number
        }
        Update: {
          created_at?: string
          id?: number
          item?: number
          month?: number
          price?: number
          region?: number
          variety?: number
          year?: number
        }
        Relationships: []
      }
      prices_unapproved: {
        Row: {
          business_name: string | null
          created_at: string
          farm_to_farm: boolean
          id: number
          item: number
          post_code: number
          price: number
          region: number
          sale_date: string
          user_id: string | null
          variety: number
          verified: boolean
        }
        Insert: {
          business_name?: string | null
          created_at?: string
          farm_to_farm: boolean
          id?: number
          item: number
          post_code: number
          price: number
          region: number
          sale_date: string
          user_id?: string | null
          variety: number
          verified?: boolean
        }
        Update: {
          business_name?: string | null
          created_at?: string
          farm_to_farm?: boolean
          id?: number
          item?: number
          post_code?: number
          price?: number
          region?: number
          sale_date?: string
          user_id?: string | null
          variety?: number
          verified?: boolean
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
