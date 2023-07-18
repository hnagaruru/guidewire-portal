package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserGroupStats.eti;UserGroupStats.eix;UserGroupStats.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UserGroupStatsInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods, com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtMethods {
  /**
   * Gets the value of the ApprovedMidTermChangesByActivity field.
   * Number mid-term changes assigned to user (or users in group) and manually approved by underwriter counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getApprovedMidTermChangesByActivity();
  
  
  /**
   * Gets the value of the ApprovedMidTermChangesByRole field.
   * Number mid-term changes assigned to user (or users in group) and manually approved by underwriter counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getApprovedMidTermChangesByRole();
  
  
  /**
   * Gets the value of the BoundSubmissionsByActivity field.
   * Number submissions assigned to user (or users in group), bound by agent, and approved by underwriter counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBoundSubmissionsByActivity();
  
  
  /**
   * Gets the value of the BoundSubmissionsByRole field.
   * Number submissions assigned to user (or users in group), bound by agent, and approved by underwriter counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBoundSubmissionsByRole();
  
  
  /**
   * Gets the value of the CalculateDate field.
   * Date when statistics were calculated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCalculateDate();
  
  
  /**
   * Gets the value of the CompletedActivities field.
   * Number completed activities assigned to user (or users in group).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCompletedActivities();
  
  
  /**
   * Gets the value of the Group field.
   * The given group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getGroup();
  
  
  public gw.pl.persistence.core.Key getGroupID();
  
  
  /**
   * Gets the value of the MisassignedActivities field.
   * Number of activities that are not associated with a member of the assigned group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getMisassignedActivities();
  
  
  /**
   * Gets the value of the MisassignedJobsByActivity field.
   * Number of jobs that are not associated with a member of the assigned group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getMisassignedJobsByActivity();
  
  
  /**
   * Gets the value of the MisassignedJobsByRole field.
   * Number of jobs that are not associated with a member of the assigned group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getMisassignedJobsByRole();
  
  
  /**
   * Gets the value of the NewMidTermChangesByActivity field.
   * Number new mid-term changes assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewMidTermChangesByActivity();
  
  
  /**
   * Gets the value of the NewMidTermChangesByRole field.
   * Number new mid-term changes assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewMidTermChangesByRole();
  
  
  /**
   * Gets the value of the NewRenewalsByActivity field.
   * Number new renewals assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewRenewalsByActivity();
  
  
  /**
   * Gets the value of the NewRenewalsByRole field.
   * Number new renewals assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewRenewalsByRole();
  
  
  /**
   * Gets the value of the NewSubmissionsByActivity field.
   * Number new submissions assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewSubmissionsByActivity();
  
  
  /**
   * Gets the value of the NewSubmissionsByRole field.
   * Number new submissions assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewSubmissionsByRole();
  
  
  /**
   * Gets the value of the NonRenewedRenewalsByActivity field.
   * Number renewals assigned to user (or users in group) and processed for non-renew by underwriter counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNonRenewedRenewalsByActivity();
  
  
  /**
   * Gets the value of the NonRenewedRenewalsByRole field.
   * Number renewals assigned to user (or users in group) and processed for non-renew by underwriter counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNonRenewedRenewalsByRole();
  
  
  /**
   * Gets the value of the NotTakenRenewalsByActivity field.
   * Number renewals assigned to user (or users in group) and not-taken by insured counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNotTakenRenewalsByActivity();
  
  
  /**
   * Gets the value of the NotTakenRenewalsByRole field.
   * Number renewals assigned to user (or users in group) and not-taken by insured counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNotTakenRenewalsByRole();
  
  
  /**
   * Gets the value of the OpenActivities field.
   * Number open activities assigned to user (or users in group).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenActivities();
  
  
  /**
   * Gets the value of the OpenMidTermChangesByActivity field.
   * Number open mid-term changes assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenMidTermChangesByActivity();
  
  
  /**
   * Gets the value of the OpenMidTermChangesByRole field.
   * Number open mid-term changes assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenMidTermChangesByRole();
  
  
  /**
   * Gets the value of the OpenRenewalsByActivity field.
   * Number open renewals assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenRenewalsByActivity();
  
  
  /**
   * Gets the value of the OpenRenewalsByRole field.
   * Number open renewals assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenRenewalsByRole();
  
  
  /**
   * Gets the value of the OpenSubmissionsByActivity field.
   * Number open submisisons assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenSubmissionsByActivity();
  
  
  /**
   * Gets the value of the OpenSubmissionsByRole field.
   * Number open submisisons assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenSubmissionsByRole();
  
  
  /**
   * Gets the value of the OverdueActivities field.
   * Number overdue activities assigned to user (or users in group).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOverdueActivities();
  
  
  /**
   * Gets the value of the RecordType field.
   * Type of data in this row. Extension to allow for storing of pre-aggregated stats.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TeamStatsRecordType getRecordType();
  
  
  /**
   * Gets the value of the RenewedRenewalsByActivity field.
   * Number renewals assigned to user (or users in group) and manually approved by underwriter counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRenewedRenewalsByActivity();
  
  
  /**
   * Gets the value of the RenewedRenewalsByRole field.
   * Number renewals assigned to user (or users in group) and manually approved by underwriter counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRenewedRenewalsByRole();
  
  
  /**
   * Gets the value of the User field.
   * The given user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser();
  
  
  public gw.pl.persistence.core.Key getUserID();
  
  
  /**
   * Sets the value of the ApprovedMidTermChangesByActivity field.
   */
  public void setApprovedMidTermChangesByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ApprovedMidTermChangesByRole field.
   */
  public void setApprovedMidTermChangesByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BoundSubmissionsByActivity field.
   */
  public void setBoundSubmissionsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BoundSubmissionsByRole field.
   */
  public void setBoundSubmissionsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the CalculateDate field.
   */
  public void setCalculateDate(java.util.Date value);
  
  
  /**
   * Sets the value of the CompletedActivities field.
   */
  public void setCompletedActivities(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Group field.
   */
  public void setGroup(entity.Group value);
  
  
  public void setGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the MisassignedActivities field.
   */
  public void setMisassignedActivities(java.lang.Integer value);
  
  
  /**
   * Sets the value of the MisassignedJobsByActivity field.
   */
  public void setMisassignedJobsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the MisassignedJobsByRole field.
   */
  public void setMisassignedJobsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NewMidTermChangesByActivity field.
   */
  public void setNewMidTermChangesByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NewMidTermChangesByRole field.
   */
  public void setNewMidTermChangesByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NewRenewalsByActivity field.
   */
  public void setNewRenewalsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NewRenewalsByRole field.
   */
  public void setNewRenewalsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NewSubmissionsByActivity field.
   */
  public void setNewSubmissionsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NewSubmissionsByRole field.
   */
  public void setNewSubmissionsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NonRenewedRenewalsByActivity field.
   */
  public void setNonRenewedRenewalsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NonRenewedRenewalsByRole field.
   */
  public void setNonRenewedRenewalsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NotTakenRenewalsByActivity field.
   */
  public void setNotTakenRenewalsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the NotTakenRenewalsByRole field.
   */
  public void setNotTakenRenewalsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OpenActivities field.
   */
  public void setOpenActivities(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OpenMidTermChangesByActivity field.
   */
  public void setOpenMidTermChangesByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OpenMidTermChangesByRole field.
   */
  public void setOpenMidTermChangesByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OpenRenewalsByActivity field.
   */
  public void setOpenRenewalsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OpenRenewalsByRole field.
   */
  public void setOpenRenewalsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OpenSubmissionsByActivity field.
   */
  public void setOpenSubmissionsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OpenSubmissionsByRole field.
   */
  public void setOpenSubmissionsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OverdueActivities field.
   */
  public void setOverdueActivities(java.lang.Integer value);
  
  
  /**
   * Sets the value of the RecordType field.
   */
  public void setRecordType(typekey.TeamStatsRecordType value);
  
  
  /**
   * Sets the value of the RenewedRenewalsByActivity field.
   */
  public void setRenewedRenewalsByActivity(java.lang.Integer value);
  
  
  /**
   * Sets the value of the RenewedRenewalsByRole field.
   */
  public void setRenewedRenewalsByRole(java.lang.Integer value);
  
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value);
  
  
  public void setUserID(gw.pl.persistence.core.Key value);
  
  
  
}