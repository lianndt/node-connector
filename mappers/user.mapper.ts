import { Result } from "../models/result.model";

export const mapToResult = (result: Result, newResult: any) => {
  result.resultId = newResult.result?.id;
  result.profileId = newResult.result?.profile?.id;
  result.profileName = newResult.result?.profile?.name;
  result.profileDescription = newResult.result?.profile?.description;
  result.userId = newResult.user.id;
  result.userEmail = newResult.user.email;
  result.userFullname = newResult.user.full_name;
  result.userCity = newResult.user_player?.city;
  result.userCountry = newResult.user_player?.country;
  result.branchId = newResult.branch?.id_branch;
  result.branchName = newResult.branch?.name_branch;
  result.campaignId = newResult.branch?.id_campaign;
  result.campaignName = newResult.branch?.name_campaign;
  result.invitationId = newResult.invitation?.id;
  result.invitationCreated = newResult.invitation?.created;
  result.invitationCode = newResult.invitation?.code;
  result.invitationStatus = newResult.invitation?.status;
  result.userCompanyId = newResult.invitation?.user_company_id;
};

export const mapToInvitation = (body: any) => {
  let invitationRequest = {
    emails: [],
    id_campaign: 9865,
    language: "ES",
  };

  invitationRequest.emails.push(body.billing.email);

  return invitationRequest;
};
