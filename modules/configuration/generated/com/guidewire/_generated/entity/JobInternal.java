package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Job.eti;Job.eix;Job.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface JobInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.UserRoleOwnerInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.RootInfoInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire._generated.entity.EventAwareInternal, com.guidewire.pc.domain.job.JobPublicMethods, com.guidewire.pc.domain.job.impl.JobInternalMethods, com.guidewire.pc.domain.note.NoteContainer, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback, com.guidewire.pl.system.entity.DoesNotValidateOnCommit, gw.api.assignment.UserRoleOwner, gw.api.domain.document.DocumentContainer, gw.api.history.CustomHistory {
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String JOBADDED_EVENT = "JobAdded";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String JOBCHANGED_EVENT = "JobChanged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String JOBPURGED_EVENT = "JobPurged";
  
  /**
   * 
   * @deprecated Please use the constant defined on the entity class instead.
   */
  @java.lang.Deprecated
  java.lang.String JOBREMOVED_EVENT = "JobRemoved";
  
  /**
   * Adds the given element to the ContingencyInitiatorArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContingencyInitiatorArray(entity.ContingencyJob element);
  
  
  /**
   * Adds the given element to the JobpolicyperiodArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToJobpolicyperiodArray(entity.Jobpolicyperiod element);
  
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNotes(entity.Note element);
  
  
  /**
   * Adds the given element to the Periods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPeriods(entity.PolicyPeriod element);
  
  
  /**
   * Adds the given element to the RoleAssignments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoleAssignments(entity.JobUserRoleAssignment element);
  
  
  /**
   * Adds the given element to the UpFrontPayments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUpFrontPayments(entity.UpFrontPayment element);
  
  
  /**
   * Gets the value of the CloseDate field.
   * Date and time when this job was closed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCloseDate();
  
  
  /**
   * Gets the value of the ContingencyInitiator field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContingencyJob getContingencyInitiator();
  
  
  /**
   * Gets the value of the ContingencyInitiatorArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContingencyJob[] getContingencyInitiatorArray();
  
  
  public gw.pl.persistence.core.Key getContingencyInitiatorID();
  
  
  /**
   * Gets the value of the Description field.
   * Extended description of this job which may include the reason this job was started.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the JobGroup field.
   * The group to which this job belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.JobGroup getJobGroup();
  
  
  public gw.pl.persistence.core.Key getJobGroupID();
  
  
  /**
   * Gets the value of the JobNumber field.
   * The unique identifier for this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobNumber();
  
  
  /**
   * Gets the value of the JobNumberDenorm field.
   * denorm field for JobNumber
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobNumberDenorm();
  
  
  /**
   * Gets the value of the JobpolicyperiodArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Jobpolicyperiod[] getJobpolicyperiodArray();
  
  
  /**
   * Gets the value of the NextPurgeCheckDate field.
   * The date to next evaluate this Job for purging. If null, purging should be checked at the next opportunity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNextPurgeCheckDate();
  
  
  /**
   * Gets the value of the Notes field.
   * Notes associated with this Job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes();
  
  
  /**
   * Gets the value of the Periods field.
   * Set of PolicyPeriods associated with this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod[] getPeriods();
  
  
  /**
   * Gets the value of the Policy field.
   * The Policy this Job applies to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyTerm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Gets the value of the PrimaryInsuredName field.
   * The display name of the primary names insured (denormalization).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryInsuredName();
  
  
  /**
   * Gets the value of the PrimaryInsuredNameDenorm field.
   * denorm field for PrimaryInsuredName
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryInsuredNameDenorm();
  
  
  /**
   * Gets the value of the PurgeStatus field.
   * Purge status of the job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PurgeStatus getPurgeStatus();
  
  
  /**
   * Gets the value of the RoleAssignments field.
   * Role Assignments for this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.JobUserRoleAssignment[] getRoleAssignments();
  
  
  /**
   * Gets the value of the SelectedVersion field.
   * The selected branch attached to this job. For a single-quote job this will be the only branch, while for a multi-quote job this will be one of the branches that is selected (either explicitly by a user or implicitly by the job behavior).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getSelectedVersion();
  
  
  public gw.pl.persistence.core.Key getSelectedVersionID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Job getSubtype();
  
  
  /**
   * Gets the value of the UpFrontPayments field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UpFrontPayment[] getUpFrontPayments();
  
  
  /**
   * Gets the value of the SideBySide field.
   * True if Side By Side Quoting has been set up for this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSideBySide();
  
  
  /**
   * Removes the given element from the ContingencyInitiatorArray array. This is achieved by marking the element for removal.
   */
  public void removeFromContingencyInitiatorArray(entity.ContingencyJob element);
  
  
  /**
   * Removes the given element from the ContingencyInitiatorArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContingencyInitiatorArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the JobpolicyperiodArray array. This is achieved by marking the element for removal.
   */
  public void removeFromJobpolicyperiodArray(entity.Jobpolicyperiod element);
  
  
  /**
   * Removes the given element from the JobpolicyperiodArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromJobpolicyperiodArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   */
  public void removeFromNotes(entity.Note element);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNotes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   */
  public void removeFromPeriods(entity.PolicyPeriod element);
  
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPeriods(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   */
  public void removeFromRoleAssignments(entity.JobUserRoleAssignment element);
  
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRoleAssignments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the UpFrontPayments array. This is achieved by marking the element for removal.
   */
  public void removeFromUpFrontPayments(entity.UpFrontPayment element);
  
  
  /**
   * Removes the given element from the UpFrontPayments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUpFrontPayments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CloseDate field.
   */
  public void setCloseDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ContingencyInitiator field.
   */
  public void setContingencyInitiator(entity.ContingencyJob value);
  
  
  /**
   * Sets the value of the ContingencyInitiatorArray field.
   */
  public void setContingencyInitiatorArray(entity.ContingencyJob[] value);
  
  
  public void setContingencyInitiatorID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the JobGroup field.
   */
  public void setJobGroup(entity.JobGroup value);
  
  
  public void setJobGroupID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the JobNumber field.
   */
  public void setJobNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the JobNumberDenorm field.
   */
  public void setJobNumberDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the JobpolicyperiodArray field.
   */
  public void setJobpolicyperiodArray(entity.Jobpolicyperiod[] value);
  
  
  /**
   * Sets the value of the NextPurgeCheckDate field.
   */
  public void setNextPurgeCheckDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(entity.Note[] value);
  
  
  /**
   * Sets the value of the Periods field.
   */
  public void setPeriods(entity.PolicyPeriod[] value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PrimaryInsuredName field.
   */
  public void setPrimaryInsuredName(java.lang.String value);
  
  
  /**
   * Sets the value of the PrimaryInsuredNameDenorm field.
   */
  public void setPrimaryInsuredNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the PurgeStatus field.
   */
  public void setPurgeStatus(typekey.PurgeStatus value);
  
  
  /**
   * Sets the value of the RoleAssignments field.
   */
  public void setRoleAssignments(entity.JobUserRoleAssignment[] value);
  
  
  /**
   * Sets the value of the SelectedVersion field.
   */
  public void setSelectedVersion(entity.PolicyPeriod value);
  
  
  public void setSelectedVersionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SideBySide field.
   */
  public void setSideBySide(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.Job value);
  
  
  /**
   * Sets the value of the UpFrontPayments field.
   */
  public void setUpFrontPayments(entity.UpFrontPayment[] value);
  
  
  
}