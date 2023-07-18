package entity;

/**
 * UserGroupStats
 * Statistics for a given user/group combination
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UserGroupStats.eti;UserGroupStats.eix;UserGroupStats.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "UserGroupStats")
public class UserGroupStats extends com.guidewire.pl.persistence.code.BeanBase implements entity.KeyableBean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.UserGroupStats> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.UserGroupStats>("entity.UserGroupStats");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPROVEDMIDTERMCHANGESBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApprovedMidTermChangesByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> APPROVEDMIDTERMCHANGESBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ApprovedMidTermChangesByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOUNDSUBMISSIONSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BoundSubmissionsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOUNDSUBMISSIONSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BoundSubmissionsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CALCULATEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CalculateDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMPLETEDACTIVITIES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CompletedActivities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> GROUP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Group");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MISASSIGNEDACTIVITIES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MisassignedActivities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MISASSIGNEDJOBSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MisassignedJobsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MISASSIGNEDJOBSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MisassignedJobsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEWMIDTERMCHANGESBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NewMidTermChangesByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEWMIDTERMCHANGESBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NewMidTermChangesByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEWRENEWALSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NewRenewalsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEWRENEWALSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NewRenewalsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEWSUBMISSIONSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NewSubmissionsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NEWSUBMISSIONSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NewSubmissionsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NONRENEWEDRENEWALSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NonRenewedRenewalsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NONRENEWEDRENEWALSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NonRenewedRenewalsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NOTTAKENRENEWALSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NotTakenRenewalsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NOTTAKENRENEWALSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NotTakenRenewalsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENACTIVITIES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenActivities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENMIDTERMCHANGESBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenMidTermChangesByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENMIDTERMCHANGESBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenMidTermChangesByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENRENEWALSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenRenewalsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENRENEWALSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenRenewalsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENSUBMISSIONSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenSubmissionsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENSUBMISSIONSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenSubmissionsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERDUEACTIVITIES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverdueActivities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RECORDTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RecordType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RENEWEDRENEWALSBYACTIVITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RenewedRenewalsByActivity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RENEWEDRENEWALSBYROLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RenewedRenewalsByRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> USER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "User");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.UserGroupStatsInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public UserGroupStats()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public UserGroupStats(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected UserGroupStats(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.UserGroupStatsInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.UserGroupStatsInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the ApprovedMidTermChangesByActivity field.
   * Number mid-term changes assigned to user (or users in group) and manually approved by underwriter counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getApprovedMidTermChangesByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(APPROVEDMIDTERMCHANGESBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the ApprovedMidTermChangesByRole field.
   * Number mid-term changes assigned to user (or users in group) and manually approved by underwriter counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getApprovedMidTermChangesByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(APPROVEDMIDTERMCHANGESBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the BoundSubmissionsByActivity field.
   * Number submissions assigned to user (or users in group), bound by agent, and approved by underwriter counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBoundSubmissionsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(BOUNDSUBMISSIONSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the BoundSubmissionsByRole field.
   * Number submissions assigned to user (or users in group), bound by agent, and approved by underwriter counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBoundSubmissionsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(BOUNDSUBMISSIONSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the CalculateDate field.
   * Date when statistics were calculated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCalculateDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CALCULATEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the CompletedActivities field.
   * Number completed activities assigned to user (or users in group).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCompletedActivities() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(COMPLETEDACTIVITIES_PROP.get());
  }
  
  /**
   * Gets the value of the Group field.
   * The given group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getGroup() {
    return (entity.Group)__getInternalInterface().getFieldValue(GROUP_PROP.get());
  }
  
  /**
   * 
   * @return Unique identifier of the object.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.commons.entity.Keyable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Keyable")).getID();
  }
  
  /**
   * Gets the value of the MisassignedActivities field.
   * Number of activities that are not associated with a member of the assigned group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getMisassignedActivities() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(MISASSIGNEDACTIVITIES_PROP.get());
  }
  
  /**
   * Gets the value of the MisassignedJobsByActivity field.
   * Number of jobs that are not associated with a member of the assigned group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getMisassignedJobsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(MISASSIGNEDJOBSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the MisassignedJobsByRole field.
   * Number of jobs that are not associated with a member of the assigned group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getMisassignedJobsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(MISASSIGNEDJOBSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the NewMidTermChangesByActivity field.
   * Number new mid-term changes assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewMidTermChangesByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWMIDTERMCHANGESBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the NewMidTermChangesByRole field.
   * Number new mid-term changes assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewMidTermChangesByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWMIDTERMCHANGESBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the NewRenewalsByActivity field.
   * Number new renewals assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewRenewalsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWRENEWALSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the NewRenewalsByRole field.
   * Number new renewals assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewRenewalsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWRENEWALSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the NewSubmissionsByActivity field.
   * Number new submissions assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewSubmissionsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWSUBMISSIONSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the NewSubmissionsByRole field.
   * Number new submissions assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNewSubmissionsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWSUBMISSIONSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the NonRenewedRenewalsByActivity field.
   * Number renewals assigned to user (or users in group) and processed for non-renew by underwriter counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNonRenewedRenewalsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NONRENEWEDRENEWALSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the NonRenewedRenewalsByRole field.
   * Number renewals assigned to user (or users in group) and processed for non-renew by underwriter counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNonRenewedRenewalsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NONRENEWEDRENEWALSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the NotTakenRenewalsByActivity field.
   * Number renewals assigned to user (or users in group) and not-taken by insured counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNotTakenRenewalsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NOTTAKENRENEWALSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the NotTakenRenewalsByRole field.
   * Number renewals assigned to user (or users in group) and not-taken by insured counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNotTakenRenewalsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NOTTAKENRENEWALSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the OpenActivities field.
   * Number open activities assigned to user (or users in group).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenActivities() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENACTIVITIES_PROP.get());
  }
  
  /**
   * Gets the value of the OpenMidTermChangesByActivity field.
   * Number open mid-term changes assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenMidTermChangesByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENMIDTERMCHANGESBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the OpenMidTermChangesByRole field.
   * Number open mid-term changes assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenMidTermChangesByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENMIDTERMCHANGESBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the OpenRenewalsByActivity field.
   * Number open renewals assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenRenewalsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENRENEWALSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the OpenRenewalsByRole field.
   * Number open renewals assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenRenewalsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENRENEWALSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the OpenSubmissionsByActivity field.
   * Number open submisisons assigned to user (or users in group) to be manually reviewed counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenSubmissionsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENSUBMISSIONSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the OpenSubmissionsByRole field.
   * Number open submisisons assigned to user (or users in group) to be manually reviewed counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOpenSubmissionsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENSUBMISSIONSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the OverdueActivities field.
   * Number overdue activities assigned to user (or users in group).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOverdueActivities() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(OVERDUEACTIVITIES_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RecordType field.
   * Type of data in this row. Extension to allow for storing of pre-aggregated stats.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TeamStatsRecordType getRecordType() {
    return (typekey.TeamStatsRecordType)__getInternalInterface().getFieldValue(RECORDTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the RenewedRenewalsByActivity field.
   * Number renewals assigned to user (or users in group) and manually approved by underwriter counted by activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRenewedRenewalsByActivity() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(RENEWEDRENEWALSBYACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the RenewedRenewalsByRole field.
   * Number renewals assigned to user (or users in group) and manually approved by underwriter counted by role.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRenewedRenewalsByRole() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(RENEWEDRENEWALSBYROLE_PROP.get());
  }
  
  /**
   * Gets the value of the User field.
   * The given user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUser() {
    return (entity.User)__getInternalInterface().getFieldValue(USER_PROP.get());
  }
  
  public void incOpenActivities(int val) {
    ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtMethods")).incOpenActivities(val);
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
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
   * Sets the value of the ApprovedMidTermChangesByActivity field.
   */
  private void setApprovedMidTermChangesByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(APPROVEDMIDTERMCHANGESBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ApprovedMidTermChangesByRole field.
   */
  private void setApprovedMidTermChangesByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(APPROVEDMIDTERMCHANGESBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BoundSubmissionsByActivity field.
   */
  private void setBoundSubmissionsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BOUNDSUBMISSIONSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BoundSubmissionsByRole field.
   */
  private void setBoundSubmissionsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BOUNDSUBMISSIONSBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CalculateDate field.
   */
  public void setCalculateDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CALCULATEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CompletedActivities field.
   */
  private void setCompletedActivities(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(COMPLETEDACTIVITIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Group field.
   */
  public void setGroup(entity.Group value) {
    __getInternalInterface().setFieldValue(GROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MisassignedActivities field.
   */
  private void setMisassignedActivities(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(MISASSIGNEDACTIVITIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MisassignedJobsByActivity field.
   */
  private void setMisassignedJobsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(MISASSIGNEDJOBSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MisassignedJobsByRole field.
   */
  private void setMisassignedJobsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(MISASSIGNEDJOBSBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NewMidTermChangesByActivity field.
   */
  private void setNewMidTermChangesByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NEWMIDTERMCHANGESBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NewMidTermChangesByRole field.
   */
  private void setNewMidTermChangesByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NEWMIDTERMCHANGESBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NewRenewalsByActivity field.
   */
  private void setNewRenewalsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NEWRENEWALSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NewRenewalsByRole field.
   */
  private void setNewRenewalsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NEWRENEWALSBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NewSubmissionsByActivity field.
   */
  private void setNewSubmissionsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NEWSUBMISSIONSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NewSubmissionsByRole field.
   */
  private void setNewSubmissionsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NEWSUBMISSIONSBYROLE_PROP.get(), value);
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
   * Sets the value of the NonRenewedRenewalsByActivity field.
   */
  private void setNonRenewedRenewalsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NONRENEWEDRENEWALSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NonRenewedRenewalsByRole field.
   */
  private void setNonRenewedRenewalsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NONRENEWEDRENEWALSBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NotTakenRenewalsByActivity field.
   */
  private void setNotTakenRenewalsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NOTTAKENRENEWALSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NotTakenRenewalsByRole field.
   */
  private void setNotTakenRenewalsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NOTTAKENRENEWALSBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenActivities field.
   */
  private void setOpenActivities(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(OPENACTIVITIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenMidTermChangesByActivity field.
   */
  private void setOpenMidTermChangesByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(OPENMIDTERMCHANGESBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenMidTermChangesByRole field.
   */
  private void setOpenMidTermChangesByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(OPENMIDTERMCHANGESBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenRenewalsByActivity field.
   */
  private void setOpenRenewalsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(OPENRENEWALSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenRenewalsByRole field.
   */
  private void setOpenRenewalsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(OPENRENEWALSBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenSubmissionsByActivity field.
   */
  private void setOpenSubmissionsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(OPENSUBMISSIONSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenSubmissionsByRole field.
   */
  private void setOpenSubmissionsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(OPENSUBMISSIONSBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverdueActivities field.
   */
  private void setOverdueActivities(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(OVERDUEACTIVITIES_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RecordType field.
   */
  public void setRecordType(typekey.TeamStatsRecordType value) {
    __getInternalInterface().setFieldValue(RECORDTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RenewedRenewalsByActivity field.
   */
  private void setRenewedRenewalsByActivity(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(RENEWEDRENEWALSBYACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RenewedRenewalsByRole field.
   */
  private void setRenewedRenewalsByRole(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(RENEWEDRENEWALSBYROLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the User field.
   */
  public void setUser(entity.User value) {
    __getInternalInterface().setFieldValue(USER_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.UserGroupStatsInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.UserGroupStats.this.__getDelegateManager();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the ApprovedMidTermChangesByActivity field.
     * Number mid-term changes assigned to user (or users in group) and manually approved by underwriter counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getApprovedMidTermChangesByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(APPROVEDMIDTERMCHANGESBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the ApprovedMidTermChangesByRole field.
     * Number mid-term changes assigned to user (or users in group) and manually approved by underwriter counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getApprovedMidTermChangesByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(APPROVEDMIDTERMCHANGESBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the BoundSubmissionsByActivity field.
     * Number submissions assigned to user (or users in group), bound by agent, and approved by underwriter counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBoundSubmissionsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(BOUNDSUBMISSIONSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the BoundSubmissionsByRole field.
     * Number submissions assigned to user (or users in group), bound by agent, and approved by underwriter counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBoundSubmissionsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(BOUNDSUBMISSIONSBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the CalculateDate field.
     * Date when statistics were calculated.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCalculateDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CALCULATEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the CompletedActivities field.
     * Number completed activities assigned to user (or users in group).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getCompletedActivities() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(COMPLETEDACTIVITIES_PROP.get());
    }
    
    /**
     * Gets the value of the Group field.
     * The given group.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getGroup() {
      return (entity.Group)__getInternalInterface().getFieldValue(GROUP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getGroupID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(GROUP_PROP.get());
    }
    
    /**
     * 
     * @return Unique identifier of the object.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.commons.entity.Keyable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Keyable")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the MisassignedActivities field.
     * Number of activities that are not associated with a member of the assigned group
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getMisassignedActivities() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(MISASSIGNEDACTIVITIES_PROP.get());
    }
    
    /**
     * Gets the value of the MisassignedJobsByActivity field.
     * Number of jobs that are not associated with a member of the assigned group
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getMisassignedJobsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(MISASSIGNEDJOBSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the MisassignedJobsByRole field.
     * Number of jobs that are not associated with a member of the assigned group
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getMisassignedJobsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(MISASSIGNEDJOBSBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the NewMidTermChangesByActivity field.
     * Number new mid-term changes assigned to user (or users in group) to be manually reviewed counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNewMidTermChangesByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWMIDTERMCHANGESBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the NewMidTermChangesByRole field.
     * Number new mid-term changes assigned to user (or users in group) to be manually reviewed counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNewMidTermChangesByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWMIDTERMCHANGESBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the NewRenewalsByActivity field.
     * Number new renewals assigned to user (or users in group) to be manually reviewed counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNewRenewalsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWRENEWALSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the NewRenewalsByRole field.
     * Number new renewals assigned to user (or users in group) to be manually reviewed counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNewRenewalsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWRENEWALSBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the NewSubmissionsByActivity field.
     * Number new submissions assigned to user (or users in group) to be manually reviewed counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNewSubmissionsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWSUBMISSIONSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the NewSubmissionsByRole field.
     * Number new submissions assigned to user (or users in group) to be manually reviewed counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNewSubmissionsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NEWSUBMISSIONSBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the NonRenewedRenewalsByActivity field.
     * Number renewals assigned to user (or users in group) and processed for non-renew by underwriter counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNonRenewedRenewalsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NONRENEWEDRENEWALSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the NonRenewedRenewalsByRole field.
     * Number renewals assigned to user (or users in group) and processed for non-renew by underwriter counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNonRenewedRenewalsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NONRENEWEDRENEWALSBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the NotTakenRenewalsByActivity field.
     * Number renewals assigned to user (or users in group) and not-taken by insured counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNotTakenRenewalsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NOTTAKENRENEWALSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the NotTakenRenewalsByRole field.
     * Number renewals assigned to user (or users in group) and not-taken by insured counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNotTakenRenewalsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NOTTAKENRENEWALSBYROLE_PROP.get());
    }
    
    public int getNumberOfActivities() {
      return ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).getNumberOfActivities();
    }
    
    public int getNumberOfJobsByActivity() {
      return ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).getNumberOfJobsByActivity();
    }
    
    public int getNumberOfJobsByRole() {
      return ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).getNumberOfJobsByRole();
    }
    
    /**
     * Gets the value of the OpenActivities field.
     * Number open activities assigned to user (or users in group).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOpenActivities() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENACTIVITIES_PROP.get());
    }
    
    /**
     * Gets the value of the OpenMidTermChangesByActivity field.
     * Number open mid-term changes assigned to user (or users in group) to be manually reviewed counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOpenMidTermChangesByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENMIDTERMCHANGESBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the OpenMidTermChangesByRole field.
     * Number open mid-term changes assigned to user (or users in group) to be manually reviewed counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOpenMidTermChangesByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENMIDTERMCHANGESBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the OpenRenewalsByActivity field.
     * Number open renewals assigned to user (or users in group) to be manually reviewed counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOpenRenewalsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENRENEWALSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the OpenRenewalsByRole field.
     * Number open renewals assigned to user (or users in group) to be manually reviewed counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOpenRenewalsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENRENEWALSBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the OpenSubmissionsByActivity field.
     * Number open submisisons assigned to user (or users in group) to be manually reviewed counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOpenSubmissionsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENSUBMISSIONSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the OpenSubmissionsByRole field.
     * Number open submisisons assigned to user (or users in group) to be manually reviewed counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOpenSubmissionsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(OPENSUBMISSIONSBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the OverdueActivities field.
     * Number overdue activities assigned to user (or users in group).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getOverdueActivities() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(OVERDUEACTIVITIES_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RecordType field.
     * Type of data in this row. Extension to allow for storing of pre-aggregated stats.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.TeamStatsRecordType getRecordType() {
      return (typekey.TeamStatsRecordType)__getInternalInterface().getFieldValue(RECORDTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the RenewedRenewalsByActivity field.
     * Number renewals assigned to user (or users in group) and manually approved by underwriter counted by activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getRenewedRenewalsByActivity() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(RENEWEDRENEWALSBYACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the RenewedRenewalsByRole field.
     * Number renewals assigned to user (or users in group) and manually approved by underwriter counted by role.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getRenewedRenewalsByRole() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(RENEWEDRENEWALSBYROLE_PROP.get());
    }
    
    /**
     * Gets the value of the User field.
     * The given user.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUser() {
      return (entity.User)__getInternalInterface().getFieldValue(USER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(USER_PROP.get());
    }
    
    public void incApprovedMidTermChangesByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incApprovedMidTermChangesByActivity(val);
    }
    
    public void incApprovedMidTermChangesByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incApprovedMidTermChangesByRole(val);
    }
    
    public void incBoundSubmissionsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incBoundSubmissionsByActivity(val);
    }
    
    public void incBoundSubmissionsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incBoundSubmissionsByRole(val);
    }
    
    public void incCompletedActivities(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incCompletedActivities(val);
    }
    
    public void incMisassignedActivities(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incMisassignedActivities(val);
    }
    
    public void incMisassignedJobsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incMisassignedJobsByActivity(val);
    }
    
    public void incMisassignedJobsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incMisassignedJobsByRole(val);
    }
    
    public void incNewMidTermChangesByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNewMidTermChangesByActivity(val);
    }
    
    public void incNewMidTermChangesByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNewMidTermChangesByRole(val);
    }
    
    public void incNewRenewalsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNewRenewalsByActivity(val);
    }
    
    public void incNewRenewalsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNewRenewalsByRole(val);
    }
    
    public void incNewSubmissionsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNewSubmissionsByActivity(val);
    }
    
    public void incNewSubmissionsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNewSubmissionsByRole(val);
    }
    
    public void incNonRenewedRenewalsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNonRenewedRenewalsByActivity(val);
    }
    
    public void incNonRenewedRenewalsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNonRenewedRenewalsByRole(val);
    }
    
    public void incNotTakenRenewalsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNotTakenRenewalsByActivity(val);
    }
    
    public void incNotTakenRenewalsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incNotTakenRenewalsByRole(val);
    }
    
    public void incOpenActivities(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtMethods")).incOpenActivities(val);
    }
    
    public void incOpenMidTermChangesByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incOpenMidTermChangesByActivity(val);
    }
    
    public void incOpenMidTermChangesByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incOpenMidTermChangesByRole(val);
    }
    
    public void incOpenRenewalsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incOpenRenewalsByActivity(val);
    }
    
    public void incOpenRenewalsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incOpenRenewalsByRole(val);
    }
    
    public void incOpenSubmissionsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incOpenSubmissionsByActivity(val);
    }
    
    public void incOpenSubmissionsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incOpenSubmissionsByRole(val);
    }
    
    public void incOverdueActivities(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incOverdueActivities(val);
    }
    
    public void incRenewedRenewalsByActivity(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incRenewedRenewalsByActivity(val);
    }
    
    public void incRenewedRenewalsByRole(int val) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).incRenewedRenewalsByRole(val);
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
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
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public void mergeIn(entity.UserGroupStats stats) {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).mergeIn(stats);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
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
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    public void reset() {
      ((com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods")).reset();
    }
    
    /**
     * Sets the value of the ApprovedMidTermChangesByActivity field.
     */
    public void setApprovedMidTermChangesByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(APPROVEDMIDTERMCHANGESBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ApprovedMidTermChangesByRole field.
     */
    public void setApprovedMidTermChangesByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(APPROVEDMIDTERMCHANGESBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BoundSubmissionsByActivity field.
     */
    public void setBoundSubmissionsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BOUNDSUBMISSIONSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BoundSubmissionsByRole field.
     */
    public void setBoundSubmissionsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BOUNDSUBMISSIONSBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CalculateDate field.
     */
    public void setCalculateDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(CALCULATEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CompletedActivities field.
     */
    public void setCompletedActivities(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(COMPLETEDACTIVITIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Group field.
     */
    public void setGroup(entity.Group value) {
      __getInternalInterface().setFieldValue(GROUP_PROP.get(), value);
    }
    
    public void setGroupID(gw.pl.persistence.core.Key value) {
      setFieldValue(GROUP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the MisassignedActivities field.
     */
    public void setMisassignedActivities(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(MISASSIGNEDACTIVITIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MisassignedJobsByActivity field.
     */
    public void setMisassignedJobsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(MISASSIGNEDJOBSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MisassignedJobsByRole field.
     */
    public void setMisassignedJobsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(MISASSIGNEDJOBSBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NewMidTermChangesByActivity field.
     */
    public void setNewMidTermChangesByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NEWMIDTERMCHANGESBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NewMidTermChangesByRole field.
     */
    public void setNewMidTermChangesByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NEWMIDTERMCHANGESBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NewRenewalsByActivity field.
     */
    public void setNewRenewalsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NEWRENEWALSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NewRenewalsByRole field.
     */
    public void setNewRenewalsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NEWRENEWALSBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NewSubmissionsByActivity field.
     */
    public void setNewSubmissionsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NEWSUBMISSIONSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NewSubmissionsByRole field.
     */
    public void setNewSubmissionsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NEWSUBMISSIONSBYROLE_PROP.get(), value);
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
     * Sets the value of the NonRenewedRenewalsByActivity field.
     */
    public void setNonRenewedRenewalsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NONRENEWEDRENEWALSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NonRenewedRenewalsByRole field.
     */
    public void setNonRenewedRenewalsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NONRENEWEDRENEWALSBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NotTakenRenewalsByActivity field.
     */
    public void setNotTakenRenewalsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NOTTAKENRENEWALSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NotTakenRenewalsByRole field.
     */
    public void setNotTakenRenewalsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NOTTAKENRENEWALSBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenActivities field.
     */
    public void setOpenActivities(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(OPENACTIVITIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenMidTermChangesByActivity field.
     */
    public void setOpenMidTermChangesByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(OPENMIDTERMCHANGESBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenMidTermChangesByRole field.
     */
    public void setOpenMidTermChangesByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(OPENMIDTERMCHANGESBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenRenewalsByActivity field.
     */
    public void setOpenRenewalsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(OPENRENEWALSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenRenewalsByRole field.
     */
    public void setOpenRenewalsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(OPENRENEWALSBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenSubmissionsByActivity field.
     */
    public void setOpenSubmissionsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(OPENSUBMISSIONSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenSubmissionsByRole field.
     */
    public void setOpenSubmissionsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(OPENSUBMISSIONSBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OverdueActivities field.
     */
    public void setOverdueActivities(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(OVERDUEACTIVITIES_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RecordType field.
     */
    public void setRecordType(typekey.TeamStatsRecordType value) {
      __getInternalInterface().setFieldValue(RECORDTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RenewedRenewalsByActivity field.
     */
    public void setRenewedRenewalsByActivity(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(RENEWEDRENEWALSBYACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RenewedRenewalsByRole field.
     */
    public void setRenewedRenewalsByRole(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(RENEWEDRENEWALSBYROLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the User field.
     */
    public void setUser(entity.User value) {
      __getInternalInterface().setFieldValue(USER_PROP.get(), value);
    }
    
    public void setUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(USER_PROP.get(), value);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtInternalMethods", "com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtMethodsImpl");
    config.put("com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtMethods", "com.guidewire.pc.domain.statistics.impl.UserGroupStatsCoreExtMethodsImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.UserGroupStats.class, config);
    com.guidewire._generated.entity.UserGroupStatsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.UserGroupStats, com.guidewire._generated.entity.UserGroupStatsInternal>() {
      public java.lang.Object getImplementation(entity.UserGroupStats bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.UserGroupStatsInternal getInternalInterface(entity.UserGroupStats bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.UserGroupStats newEmptyInstance() {
        return new entity.UserGroupStats((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}