import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Result extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "result_id" })
  resultId: number;

  @Column({ name: "profile_id" })
  profileId: number;

  @Column({ name: "profile_name", nullable: true })
  profileName: string;

  @Column("varchar", {
    name: "profile_description",
    nullable: true,
    length: 1000,
  })
  profileDescription: string;

  @Column({ name: "user_id" })
  userId: number;

  @Column({ name: "user_full_name" })
  userFullname: string;

  @Column({ name: "user_email", nullable: true })
  userEmail: string;

  @Column({ name: "user_city", nullable: true })
  userCity: string;

  @Column({ name: "user_country", nullable: true })
  userCountry: string;

  @Column({ name: "branch_id", nullable: true })
  branchId: string;

  @Column({ name: "branch_name", nullable: true })
  branchName: string;

  @Column({ name: "campaign_id", nullable: true })
  campaignId: number;

  @Column({ name: "campaign_name", nullable: true })
  campaignName: string;

  @Column({ name: "invitation_id", nullable: true })
  invitationId: number;

  @Column({ name: "invitation_created", nullable: true })
  invitationCreated: string;

  @Column({ name: "invitation_code", nullable: true })
  invitationCode: string;

  @Column({ name: "invitation_status", nullable: true })
  invitationStatus: string;

  @Column({ name: "user_company_id", nullable: true })
  userCompanyId: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
