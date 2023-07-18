package entity;

/**
 * Job
 * Workflow process object relating to one or more versions of a policy
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Job.eti;Job.eix;Job.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class Job extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.UserRoleOwner, entity.Extractable, entity.RootInfo, entity.FrozenSetMember, entity.EventAware, com.guidewire.pc.domain.note.NoteContainer, com.guidewire.pl.system.entity.DoesNotValidateOnCommit, gw.api.assignment.UserRoleOwner, gw.api.domain.document.DocumentContainer, gw.api.history.CustomHistory {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Job> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Job>("entity.Job");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILURE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVEFAILUREDETAILS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveFailureDetails");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ARCHIVESCHEMAINFO_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ArchiveSchemaInfo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ARCHIVESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ArchiveState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLOSEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CloseDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CONTINGENCYINITIATOR_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ContingencyInitiator");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> CONTINGENCYINITIATORARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ContingencyInitiatorArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEREASON_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludeReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCLUDEDFROMARCHIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExcludedFromArchive");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOBGROUP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "JobGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> JOBNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "JobNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> JOBNUMBERDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "JobNumberDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> JOBPOLICYPERIODARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "JobpolicyperiodArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEXTPURGECHECKDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NextPurgeCheckDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NOTES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Notes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PERIODS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Periods");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYTERM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyTerm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYINSUREDNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryInsuredName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIMARYINSUREDNAMEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PrimaryInsuredNameDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PURGESTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PurgeStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ROLEASSIGNMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RoleAssignments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SELECTEDVERSION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "SelectedVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SIDEBYSIDE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SideBySide");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> UPFRONTPAYMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "UpFrontPayments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.JobInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final gw.api.domain.job.PublicJobFinder finder = com.guidewire.pc.domain.job.JobPublicMethods.finder;
  
  public static final com.guidewire.pc.domain.job.restrictors.JobQueryRestrictorFactory restrictors = com.guidewire.pc.domain.job.JobPublicMethods.restrictors;
  
  public static final com.guidewire.pc.domain.job.JobTypeHelper types = com.guidewire.pc.domain.job.JobPublicMethods.types;
  
  public static final java.lang.String JOBADDED_EVENT = "JobAdded";
  
  public static final java.lang.String JOBCHANGED_EVENT = "JobChanged";
  
  public static final java.lang.String JOBPURGED_EVENT = "JobPurged";
  
  public static final java.lang.String JOBREMOVED_EVENT = "JobRemoved";
  
  protected Job(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.JobInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.JobInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNotes(entity.Note element) {
    __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Periods array. This is achieved by setting the parent foreign key to this entity instance.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void addToPeriods(entity.PolicyPeriod value) {
    ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).addToPeriods(value);
  }
  
  /**
   * Adds the given element to the RoleAssignments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRoleAssignments(entity.JobUserRoleAssignment element) {
    __getInternalInterface().addArrayElement(ROLEASSIGNMENTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the UpFrontPayments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToUpFrontPayments(entity.UpFrontPayment element) {
    __getInternalInterface().addArrayElement(UPFRONTPAYMENTS_PROP.get(), element);
  }
  
  /**
   * Assigns the given User/Group pair to the given role on this assignable object.
   * If the role is exclusive, replaces the existing assignment. Otherwise, adds a
   * new assignment for the given User/Group pair, if none already exists for that
   * role.
   * @param user the User to assign the Role to
   * @param group the Group to assign the the Role to
   * @param role the role to assign the User/Group to
   * @return the assigned JobUserRoleAssignment
   */
  public entity.JobUserRoleAssignment assignUserRole(entity.User user, entity.Group group, typekey.UserRole role) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).assignUserRole(user, group, role);
  }
  
  /**
   * Assigns the UserRole for this assignable item.
   * This uses rules to find the right assignment
   * @param role The role to assign
   */
  public boolean autoAssignRole(typekey.UserRole role) {
    return ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).autoAssignRole(role);
  }
  
  public void beforeInsert() {
    ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
  }
  
  /**
   * This method will return true if this object can be restored at this time.  There are two possible reason why this
   * would be false.  1.  the object was not archived in the first place; 2.  The archive source is not currently available
   * @return true if okay to restore
   */
  public boolean canRestore() {
    return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).canRestore();
  }
  
  /**
   * Cancel all open outstanding activities on this job.
   */
  public void cancelOpenActivities() {
    ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).cancelOpenActivities();
  }
  
  /**
   * Cancel any open outstanding activities for the specific pattern on this job.
   * Used primarily to close approval activities that where left around by the
   * user after dealing with the approval manually in the main window.
   * @param pattern the pattern to be matched
   */
  public void cancelOpenActivities(entity.ActivityPattern pattern) {
    ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).cancelOpenActivities(pattern);
  }
  
  /**
   * Cancel any open outstanding activities for the specific pattern on this job.
   * Used primarily to close approval activities that were left around by the
   * user after dealing with the approval manually in the main window.
   * @param category the category of activities being processed
   */
  public void cancelOpenActivitiesForCategory(typekey.ActivityCategory category) {
    ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).cancelOpenActivitiesForCategory(category);
  }
  
  /**
   * Calls through to {@link com.guidewire.pc.domain.assignment.PCAssignmentResolver#cascadeAssignment(gw.pl.persistence.core.Bundle, entity.Assignable, gw.api.database.IQueryBeanResult)}
   * PCAssignmentResolver.cascadeAssignment()}
   * to reassign various {@link Assignable Assignables} (such as Activities) appropriately.
   * @param assignment the assignment to be cascaded
   */
  public void cascadeAssignment(entity.Assignable assignment) {
    ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).cascadeAssignment(assignment);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Creates a {@link PolicyPeriod} for this Job by calling through to {@link #createBasePeriod(java.util.Date)}
   * with the given Effective Date, then adds the resulting PolicyPeriod to this Job and returns the PolicyPeriod.
   * This PolicyPeriod must be the first PolicyPeriod for this Policy, and thus will create the initial
   * {@link entity.PolicyTerm}
   * @param effectiveDate the Effective Date for the Policy
   * @return the newly created PolicyPeriod
   */
  public entity.PolicyPeriod createAndAddBasePeriod(java.util.Date effectiveDate) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).createAndAddBasePeriod(effectiveDate);
  }
  
  /**
   * Creates a new {@link JobUserRoleAssignment}. All fields are initially empty
   * @return the resulting JobUserRoleAssignment
   */
  public entity.JobUserRoleAssignment createAndAddRoleAssignment() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).createAndAddRoleAssignment();
  }
  
  /**
   * Creates a Draft {@link PolicyPeriod} for the {@link entity.Policy} associated with this
   * Job.  The PolicyPeriod will be the first one on the given Policy, and thus will create a new
   * {@link entity.PolicyTerm}
   * @param effectiveDate the Effective Date for the Policy
   * @return the newly created PolicyPeriod
   */
  public entity.PolicyPeriod createBasePeriod(java.util.Date effectiveDate) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).createBasePeriod(effectiveDate);
  }
  
  public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description) {
    return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description);
  }
  
  public entity.History createCustomHistoryEvent(typekey.CustomHistoryType type, java.util.concurrent.Callable<java.lang.String> description, java.lang.String originalValue, java.lang.String newValue) {
    return ((gw.api.history.CustomHistory)__getDelegateManager().getImplementation("gw.api.history.CustomHistory")).createCustomHistoryEvent(type, description, originalValue, newValue);
  }
  
  /**
   * Creates and initializes a job for a future bound period. This is called
   * when a period is bound for the earlier term, in which case we want the
   * change to propagate to the future term as well. Unlike startJob,
   * this method does not create a new branch. Instead, the "futureBranch"
   * argument is added to the job. The job is initialized via a call to
   * {@link gw.api.job.IJobProcess#initializeFuturePeriodJob} to permit handling of
   * customer-specific fields on the job. Note that this method does not
   * actually start the job.
   * @param futureBranch Branch for which to create job
   * @throws com.guidewire.pl.web.controller.UserDisplayableException if the job cannot be started.
   * @return the resulting job
   */
  public entity.Job createFutureJob(entity.PolicyPeriod futureBranch) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).createFutureJob(futureBranch);
  }
  
  /**
   * Returns true if this Job creates a new {@link entity.Policy} with a new Policy Number
   * @return true if this job creates a new policy
   */
  public boolean createsNewPolicy() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).createsNewPolicy();
  }
  
  /**
   * Gets the <b>active</b> {@link PolicyPeriod periods} of the job, meaning all periods of the
   * job for which {@link entity.PolicyPeriod#isActive()} is true. This method will
   * never return null; an empty array is returned if no active periods are
   * in the job.  Results are returned in ascending BranchNumber order
   * @return the periods active on the job sorted by ascending BranchNumber order, or an empty array if there are no
   * active PolicyPeriods.
   */
  public entity.PolicyPeriod[] getActivePeriods() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getActivePeriods();
  }
  
  /**
   * Gets the active assignments to the given role.
   * @param userRole the UserRole to check for active assignements
   * @return all active JobUserRoleAssignemnts for the given UserRole
   */
  public entity.JobUserRoleAssignment[] getActiveUserRoleAssignments(typekey.UserRole userRole) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getActiveUserRoleAssignments(userRole);
  }
  
  /**
   * Returns all activities associated with this job (i.e. Activity.JobID is this job)
   * @return the activities for the job or an empty QueryProcessor if this job has not been persisted
   */
  public gw.api.database.IQueryBeanResult<entity.Activity> getAllActivities() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getAllActivities();
  }
  
  /**
   * Gets a displayable string containing all assigned user roles for this Job
   * @return a display string listing all assigned user roles
   */
  public java.lang.String getAllAssigned() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getAllAssigned();
  }
  
  /**
   * Returns all open activities associated with this job (i.e. Activity.JobID is this job)
   * @return open activities for the job or an empty QueryProcessor if this job has not been persisted
   */
  public gw.api.database.IQueryBeanResult<entity.Activity> getAllOpenActivities() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getAllOpenActivities();
  }
  
  public int getApplicationMajorVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getApplicationMajorVersion();
  }
  
  public int getApplicationMinorVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getApplicationMinorVersion();
  }
  
  /**
   * Gets the value of the ArchiveDate field.
   * When archiving was attempted on the root. Null if we never attempted to archive it.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getArchiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ARCHIVEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ArchiveFailure field.
   * Short version of the reason for a failure to archive
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArchiveFailure getArchiveFailure() {
    return (entity.ArchiveFailure)__getInternalInterface().getFieldValue(ARCHIVEFAILURE_PROP.get());
  }
  
  /**
   * Gets the value of the ArchiveFailureDetails field.
   * Full details of archive failure
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ArchiveFailureDetails getArchiveFailureDetails() {
    return (entity.ArchiveFailureDetails)__getInternalInterface().getFieldValue(ARCHIVEFAILUREDETAILS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  /**
   * Gets the value of the ArchiveSchemaInfo field.
   * Schema version at which the root was archived or null if it was not archived
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UpgradeDatamodelInfo getArchiveSchemaInfo() {
    return (entity.UpgradeDatamodelInfo)__getInternalInterface().getFieldValue(ARCHIVESCHEMAINFO_PROP.get());
  }
  
  /**
   * Gets the value of the ArchiveState field.
   * The archive state of the graph
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ArchiveState getArchiveState() {
    return (typekey.ArchiveState)__getInternalInterface().getFieldValue(ARCHIVESTATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CloseDate field.
   * Date and time when this job was closed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCloseDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CLOSEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ContingencyInitiator field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContingencyJob getContingencyInitiator() {
    return (entity.ContingencyJob)__getInternalInterface().getFieldValue(CONTINGENCYINITIATOR_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContingencyJob[] getContingencyInitiatorArray() {
    return (entity.ContingencyJob[])__getInternalInterface().getFieldValue(CONTINGENCYINITIATORARRAY_PROP.get());
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Returns the user role assignment for the current rule execution
   * @return the current RoleAssignment for this Job
   */
  public entity.JobUserRoleAssignment getCurrentRoleAssignment() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getCurrentRoleAssignment();
  }
  
  /**
   * Gets the value of the Description field.
   * Extended description of this job which may include the reason this job was started.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the set of {@link entity.Document Documents} linked to this Job
   * @return a QueryProcessor containing the set of documents linked to this Job or returns an empty
   * QueryProcessor if this job has not been persisted
   */
  public gw.api.database.IQueryBeanResult<entity.Document> getDocuments() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getDocuments();
  }
  
  /**
   * Gets the value of the ExcludeReason field.
   * Reason for excluding or skipping the entity from archiving. If the ExcludeFromArchive bit is set, this gives the reason for excluding. Else, if this is not null, it is the reason for skipping.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getExcludeReason() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCLUDEREASON_PROP.get());
  }
  
  public int getExtensionsVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getExtensionsVersion();
  }
  
  /**
   * This will return an activity of the appropriate pattern.  Returns the most recent open activity if there is one,
   * or the most recent closed activity if there are no open activities of the appropriate pattern.
   * @param pattern the pattern to be matched
   * @return the first activity on the job matching the pattern
   */
  public entity.Activity getFirstActivity(entity.ActivityPattern pattern) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getFirstActivity(pattern);
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the JobGroup field.
   * The group to which this job belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.JobGroup getJobGroup() {
    return (entity.JobGroup)__getInternalInterface().getFieldValue(JOBGROUP_PROP.get());
  }
  
  /**
   * Gets the value of the JobNumber field.
   * The unique identifier for this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(JOBNUMBER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobNumberDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(JOBNUMBERDENORM_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Jobpolicyperiod[] getJobpolicyperiodArray() {
    return (entity.Jobpolicyperiod[])__getInternalInterface().getFieldValue(JOBPOLICYPERIODARRAY_PROP.get());
  }
  
  /**
   * Returns the currently selected {@link PolicyPeriod} of this job.
   * @return the PolicyPeriod that is selected for this Job
   */
  public entity.PolicyPeriod getLatestPeriod() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getLatestPeriod();
  }
  
  /**
   * Returns the maximum number of quotes supported by this job, which should
   * always be one or more. Currently Submission, Policy Change and Renewal are the only jobs
   * that support multi-quote; the maximum number of quotes is specified by
   * configuration parameters.
   * @return the max quotes allowed on the job
   */
  public int getMaxNumberOfQuotes() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getMaxNumberOfQuotes();
  }
  
  /**
   * Returns the maximum number of side by side quotes supported by this job, which should
   * always be one or more. Currently Submission, Policy Change,  and Renewal are the only jobs
   * that support side by side; the maximum number of quotes is specified by
   * configuration parameters.
   * @return the max side by side quotes allowed on the job
   */
  public int getMaxNumberOfSideBySideQuotes() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getMaxNumberOfSideBySideQuotes();
  }
  
  /**
   * Gets the value of the NextPurgeCheckDate field.
   * The date to next evaluate this Job for purging. If null, purging should be checked at the next opportunity
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNextPurgeCheckDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(NEXTPURGECHECKDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Notes field.
   * Notes associated with this Job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes() {
    return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
  }
  
  /**
   * Gets the user role assignment for that role
   * If there's no assignment for that role, creates a new one.
   * If there is more than one assignment for that role, then the first role will be returned no matter
   * whether the role is exclusive or not.
   * @param role The role for the assignment
   * @return the existing user role assignment if found, or a new one if not found
   */
  public entity.JobUserRoleAssignment getOrCreateUserRoleAssignmentByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getOrCreateUserRoleAssignmentByRole(role);
  }
  
  /**
   * Gets the value of the Periods field.
   * Set of PolicyPeriods associated with this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod[] getPeriods() {
    return (entity.PolicyPeriod[])__getInternalInterface().getFieldValue(PERIODS_PROP.get());
  }
  
  public int getPlatformMajorVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getPlatformMajorVersion();
  }
  
  public int getPlatformMinorVersion() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getPlatformMinorVersion();
  }
  
  /**
   * Gets the value of the Policy field.
   * The Policy this Job applies to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyTerm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm() {
    return (entity.PolicyTerm)__getInternalInterface().getFieldValue(POLICYTERM_PROP.get());
  }
  
  /**
   * Gets the value of the PrimaryInsuredName field.
   * The display name of the primary names insured (denormalization).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryInsuredName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYINSUREDNAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrimaryInsuredNameDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRIMARYINSUREDNAMEDENORM_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Returns the public ID of the root.
   * @return public ID of the root.
   */
  public java.lang.String getPublicIDOfRoot() {
    return ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).getPublicIDOfRoot();
  }
  
  /**
   * Gets the value of the PurgeStatus field.
   * Purge status of the job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PurgeStatus getPurgeStatus() {
    return (typekey.PurgeStatus)__getInternalInterface().getFieldValue(PURGESTATUS_PROP.get());
  }
  
  /**
   * If the job is complete and resulted in a bound period, return that period.
   * Otherwise, return null. In the rare case (currently only in Audit) where a Job
   * has multiple bound periods, returns the last one.
   * @return the bound period for the job or null if the job is not bound or not complete
   */
  public entity.PolicyPeriod getResultingBoundPeriod() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getResultingBoundPeriod();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the RoleAssignments field.
   * Role Assignments for this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.JobUserRoleAssignment[] getRoleAssignments() {
    return (entity.JobUserRoleAssignment[])__getInternalInterface().getFieldValue(ROLEASSIGNMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the SelectedVersion field.
   * The selected branch attached to this job. For a single-quote job this will be the only branch, while for a multi-quote job this will be one of the branches that is selected (either explicitly by a user or implicitly by the job behavior).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getSelectedVersion() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(SELECTEDVERSION_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Job getSubtype() {
    return (typekey.Job)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Returns the user that has the Underwriter role for this job. Returns null if the job
   * has no underwriter
   * @return the underwriter for the job or null if no underwriter
   */
  public entity.User getUnderwriter() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getUnderwriter();
  }
  
  /**
   * Gets the value of the UpFrontPayments field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UpFrontPayment[] getUpFrontPayments() {
    return (entity.UpFrontPayment[])__getInternalInterface().getFieldValue(UPFRONTPAYMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * Returns the JobUserRole that the given User has with this Job, or null.
   * @param user the user whose role on the job should be found
   * @return the role of the user on the job or null if no role
   */
  public typekey.UserRole getUserRole(entity.User user) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getUserRole(user);
  }
  
  /**
   * Gets the assignment that corresponds to the given user and role, or null
   * if none matches.
   * @param user the User to look up the JobUserRoleAssignment for
   * @param userRole the UserRole to look up the JobUserRoleAssignment for
   * @return the JobUserRoleAssignemnt for the given User and UserRole if it exists; null if not
   */
  public entity.JobUserRoleAssignment getUserRoleAssignment(entity.User user, typekey.UserRole userRole) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getUserRoleAssignment(user, userRole);
  }
  
  /**
   * Gets the user role assignment for that role
   * If there's no assignment for that role, returns null.
   * If there is more than one assignment for that role, then the first role will be returned.
   * Note: getUserRoleAssignmentsByRole(UserRole) should be called if multiple assignments are expected to return.
   * @param role The role for the assignment
   * @return the found JobUserRoleAssignment, or null if none was found
   */
  public entity.JobUserRoleAssignment getUserRoleAssignmentByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getUserRoleAssignmentByRole(role);
  }
  
  /**
   * Get the user role assignments for that role. If no assignment for that role,
   * then an empty array is returned.
   * @param role The role for the assignment
   * @return an array of user role assignments for the given role. The array is empty if no such user role assignment.
   */
  public entity.JobUserRoleAssignment[] getUserRoleAssignmentsByRole(typekey.UserRole role) {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).getUserRoleAssignmentsByRole(role);
  }
  
  public java.lang.String getVersionString() {
    return ((com.guidewire.commons.metadata.internal.version.MetadataVersionProvider)__getDelegateManager().getImplementation("com.guidewire.commons.metadata.internal.version.MetadataVersionProvider")).getVersionString();
  }
  
  /**
   * Iterates through open {@link entity.Activity Activities} of the given category.  For each Activity, if the open activity
   * is assigned to the current user, it will complete the activity, otherwise it will cancel the activity.
   * @param category the category of activities that is being processed
   */
  public void handleOpenActivity(typekey.ActivityCategory category) {
    ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).handleOpenActivity(category);
  }
  
  /**
   * Returns true if the number of active periods in this job (as returned
   * by {@link #getActivePeriods()} equal to or greater than the maximum number
   * of periods permitted (as returned by {@link #getMaxNumberOfQuotes()}. If this
   * returns true, then no new periods should be created for this job until
   * one of the existing active periods is withdrawn.
   * @return true if the limit on quotes has been reached for this job
   */
  public boolean hasMaxNumberOfQuotes() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).hasMaxNumberOfQuotes();
  }
  
  /**
   * Returns true if the number of active periods in this job (as returned
   * by {@link #getActivePeriods()}) equal to or greater than the maximum number
   * of side by side periods permitted (as returned by {@link #getMaxNumberOfQuotes()}.
   * If this returns true, then no new periods should be created for this job until
   * one of the existing active periods is withdrawn.
   * @return true if the limit on quotes has been reached for this job
   */
  public boolean hasMaxNumberOfSideBySideQuotes() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).hasMaxNumberOfSideBySideQuotes();
  }
  
  /**
   * True if we have more than one active branch on this Job.
   * @return true if more than one active period
   */
  public boolean hasMultiplePeriods() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).hasMultiplePeriods();
  }
  
  /**
   * Returns true if all policy periods in the job have completed statuses and completed workflows
   * @return true if the job is complete
   */
  public boolean isComplete() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).isComplete();
  }
  
  /**
   * Gets the value of the ExcludedFromArchive field.
   * Indicate if this entity should be excluded from archiving
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExcludedFromArchive() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXCLUDEDFROMARCHIVE_PROP.get());
  }
  
  /**
   * Determines whether the given role is exclusive for this type of assignable object.
   * @param userRole 
   * @return 
   */
  public boolean isExclusive(typekey.UserRole userRole) {
    return ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).isExclusive(userRole);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * Returns true if this Job creates a new {@link entity.PolicyTerm}
   * @return true if this Job creates a new PolicyTerm
   */
  public boolean isNewTerm() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).isNewTerm();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Returns true if there are any EffDated entities in this policy graph with an Effective Date after the
   * EditEffectiveDate of this Job.
   * <p>
   * Note: Audit is a special case, and overrides this, as Audit jobs cannot be OOS by definition.
   * @return true if this job is OOS
   */
  public java.lang.Boolean isOOSJob() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).isOOSJob();
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Gets the value of the SideBySide field.
   * True if Side By Side Quoting has been set up for this job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSideBySide() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SIDEBYSIDE_PROP.get());
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   */
  public void removeFromNotes(entity.Note element) {
    __getInternalInterface().removeArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNotes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(NOTES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   */
  public void removeFromPeriods(entity.PolicyPeriod element) {
    __getInternalInterface().removeArrayElement(PERIODS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPeriods(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PERIODS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   */
  public void removeFromRoleAssignments(entity.JobUserRoleAssignment element) {
    __getInternalInterface().removeArrayElement(ROLEASSIGNMENTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RoleAssignments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRoleAssignments(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ROLEASSIGNMENTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the UpFrontPayments array. This is achieved by marking the element for removal.
   */
  public void removeFromUpFrontPayments(entity.UpFrontPayment element) {
    __getInternalInterface().removeArrayElement(UPFRONTPAYMENTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the UpFrontPayments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromUpFrontPayments(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(UPFRONTPAYMENTS_PROP.get(), elementID);
  }
  
  /**
   * Report an issue that prevents this item from being archived. Usually called by a rule when it has determined that the item is not
   * ready to be archived yet. Unlike skipFromArchiving(), this method does not return immediately and subsequent rules are processed.
   * @param message The reason for skipping.
   */
  public void reportArchiveProblem(java.lang.String message) {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).reportArchiveProblem(message);
  }
  
  /**
   * Reset flag that marks the graph as excluded for archiving
   */
  public void resetToPreArchivedState() {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).resetToPreArchivedState();
  }
  
  /**
   * Schedule this item for archival
   */
  public void scheduleForArchive() {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).scheduleForArchive();
  }
  
  /**
   * Sets the value of the ArchiveDate field.
   */
  private void setArchiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ARCHIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveFailure field.
   */
  private void setArchiveFailure(entity.ArchiveFailure value) {
    __getInternalInterface().setFieldValue(ARCHIVEFAILURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveFailureDetails field.
   */
  private void setArchiveFailureDetails(entity.ArchiveFailureDetails value) {
    __getInternalInterface().setFieldValue(ARCHIVEFAILUREDETAILS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveSchemaInfo field.
   */
  private void setArchiveSchemaInfo(entity.UpgradeDatamodelInfo value) {
    __getInternalInterface().setFieldValue(ARCHIVESCHEMAINFO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchiveState field.
   */
  private void setArchiveState(typekey.ArchiveState value) {
    __getInternalInterface().setFieldValue(ARCHIVESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CloseDate field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setCloseDate(java.util.Date value) {
    ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).setCloseDate(value);
  }
  
  /**
   * Sets the value of the ContingencyInitiator field.
   */
  public void setContingencyInitiator(entity.ContingencyJob value) {
    __getInternalInterface().setFieldValue(CONTINGENCYINITIATOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContingencyInitiatorArray field.
   */
  private void setContingencyInitiatorArray(entity.ContingencyJob[] value) {
    __getInternalInterface().setFieldValue(CONTINGENCYINITIATORARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExcludeReason field.
   */
  private void setExcludeReason(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXCLUDEREASON_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExcludedFromArchive field.
   */
  private void setExcludedFromArchive(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(EXCLUDEDFROMARCHIVE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JobGroup field.
   */
  private void setJobGroup(entity.JobGroup value) {
    __getInternalInterface().setFieldValue(JOBGROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JobNumber field.
   */
  public void setJobNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(JOBNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JobNumberDenorm field.
   */
  private void setJobNumberDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(JOBNUMBERDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JobpolicyperiodArray field.
   */
  private void setJobpolicyperiodArray(entity.Jobpolicyperiod[] value) {
    __getInternalInterface().setFieldValue(JOBPOLICYPERIODARRAY_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the NextPurgeCheckDate field.
   */
  public void setNextPurgeCheckDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(NEXTPURGECHECKDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(entity.Note[] value) {
    __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Periods field.
   */
  public void setPeriods(entity.PolicyPeriod[] value) {
    __getInternalInterface().setFieldValue(PERIODS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Policy field.
   */
  private void setPolicy(entity.Policy value) {
    __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  private void setPolicyTerm(entity.PolicyTerm value) {
    __getInternalInterface().setFieldValue(POLICYTERM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryInsuredName field.
   */
  public void setPrimaryInsuredName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYINSUREDNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PrimaryInsuredNameDenorm field.
   */
  private void setPrimaryInsuredNameDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRIMARYINSUREDNAMEDENORM_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the root public ID to the passed value.
   * @param value value for the root public ID.
   */
  public void setPublicIDOfRoot(java.lang.String value) {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).setPublicIDOfRoot(value);
  }
  
  /**
   * Sets the value of the PurgeStatus field.
   */
  private void setPurgeStatus(typekey.PurgeStatus value) {
    __getInternalInterface().setFieldValue(PURGESTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoleAssignments field.
   */
  public void setRoleAssignments(entity.JobUserRoleAssignment[] value) {
    __getInternalInterface().setFieldValue(ROLEASSIGNMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SelectedVersion field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setSelectedVersion(entity.PolicyPeriod value) {
    ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).setSelectedVersion(value);
  }
  
  /**
   * Sets the value of the SideBySide field.
   */
  public void setSideBySide(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(SIDEBYSIDE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.Job value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpFrontPayments field.
   */
  public void setUpFrontPayments(entity.UpFrontPayment[] value) {
    __getInternalInterface().setFieldValue(UPFRONTPAYMENTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * The following is used by {@link gw.plugin.policyperiod.IPolicyTermPlugin#calculatePeriodEnd(
   * java.util.Date, typekey.TermType, entity.PolicyPeriod)}
   * to prevent date-drifting (two half-year terms are not equivalent to one annual term)
   * @return True if the job type can fix date-drifting issues. This is false by default,
   * however, this is true for {@link entity.Submission}s and {@link entity.Renewal}s
   */
  public boolean shouldPerformDateReconciliation() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).shouldPerformDateReconciliation();
  }
  
  /**
   * Skip archival of this item. Usually called by a rule when it has determined that the item is not ready to be archived yet.
   * Unlike reportArchiveProblem(), this method returns immediately and no more rules are processed.
   * @param message The reason for skipping.
   */
  public void skipFromArchiving(java.lang.String message) {
    ((com.guidewire.pl.domain.extract.RootInfoPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.extract.RootInfoPublicMethods")).skipFromArchiving(message);
  }
  
  /**
   * Returns true if this job supports multi-quote, which is determined by
   * checking if {@link #getMaxNumberOfQuotes()} returns a value greater than
   * one.
   * @return true if multiquote is supported
   */
  public boolean supportsMultiQuote() {
    return ((com.guidewire.pc.domain.job.JobPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.job.JobPublicMethods")).supportsMultiQuote();
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  /**
   * Removes the role from the given User on this assignable object.
   * @param user 
   * @param role 
   */
  public void unassignUserRole(entity.User user, typekey.UserRole role) {
    ((gw.api.assignment.UserRoleOwner)__getDelegateManager().getImplementation("gw.api.assignment.UserRoleOwner")).unassignUserRole(user, role);
  }
  
  static {
    com.guidewire._generated.entity.JobInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.Job, com.guidewire._generated.entity.JobInternal>() {
      public java.lang.Object getImplementation(entity.Job bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.JobInternal getInternalInterface(entity.Job bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}