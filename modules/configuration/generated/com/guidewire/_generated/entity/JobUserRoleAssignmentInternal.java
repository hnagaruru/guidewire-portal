package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "JobUserRoleAssignment.eti;JobUserRoleAssignment.eix;JobUserRoleAssignment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface JobUserRoleAssignmentInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.UserRoleAssignmentInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String JOBUSERROLEASSIGNMENTADDED_EVENT = "JobUserRoleAssignmentAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String JOBUSERROLEASSIGNMENTCHANGED_EVENT = "JobUserRoleAssignmentChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String JOBUSERROLEASSIGNMENTREMOVED_EVENT = "JobUserRoleAssignmentRemoved";
  
  /**
   * Gets the value of the Job field.
   * Associated job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  
}