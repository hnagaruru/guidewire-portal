package entity;

/**
 * DynamicAssignmentState
 * 
 *         Maintains round-robin assignment state for a particular fingerprint. The fingerprint is generated
 *         from some entity (such as a UserSearchCriteria) which determines the set of users to be chosen
 *         via round-robin. This is an internal class which should only be used by the internals of the
 *         assignment engine.
 *       
 *     
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DynamicAssignmentState.eti;DynamicAssignmentState.eix;DynamicAssignmentState.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "DynamicAssignmentState")
public class DynamicAssignmentState extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.LastAssignedUserContainerBase, entity.LastAssignedUserContainer {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.DynamicAssignmentState> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.DynamicAssignmentState>("entity.DynamicAssignmentState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FINGERPRINT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Fingerprint");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> GROUPONLY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "GroupOnly");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTACCOUNTGRP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastAccountGrp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTACCOUNTUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastAccountUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTACTIVITYGRP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastActivityGrp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTACTIVITYUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastActivityUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTJOBGRP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastJobGrp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTJOBUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastJobUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTPOLICYGRP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastPolicyGrp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTPOLICYUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastPolicyUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTREVIEWGRP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastReviewGrp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LASTREVIEWUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LastReviewUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOCKINGCOLUMN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LockingColumn");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.DynamicAssignmentStateInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public DynamicAssignmentState()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public DynamicAssignmentState(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected DynamicAssignmentState(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.DynamicAssignmentStateInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.DynamicAssignmentStateInternal __getInternalInterface() {
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
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
   * Gets the value of the Fingerprint field.
   * The fingerprint this state is tracking.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFingerprint() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FINGERPRINT_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LastAccountGrp field.
   * The id of the last group that was assigned an account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastAccountGrp() {
    return (entity.Group)__getInternalInterface().getFieldValue(LASTACCOUNTGRP_PROP.get());
  }
  
  /**
   * Gets the value of the LastAccountUser field.
   * The id of the last user that was assigned an account.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastAccountUser() {
    return (entity.User)__getInternalInterface().getFieldValue(LASTACCOUNTUSER_PROP.get());
  }
  
  /**
   * Gets the value of the LastActivityGrp field.
   * The id of the last group that was assigned an activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastActivityGrp() {
    return (entity.Group)__getInternalInterface().getFieldValue(LASTACTIVITYGRP_PROP.get());
  }
  
  /**
   * Gets the value of the LastActivityUser field.
   * The id of the last user that was assigned an activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastActivityUser() {
    return (entity.User)__getInternalInterface().getFieldValue(LASTACTIVITYUSER_PROP.get());
  }
  
  /**
   * Gets the value of the LastJobGrp field.
   * The id of the last group that was assigned a job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastJobGrp() {
    return (entity.Group)__getInternalInterface().getFieldValue(LASTJOBGRP_PROP.get());
  }
  
  /**
   * Gets the value of the LastJobUser field.
   * The id of the last user that was assigned a job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastJobUser() {
    return (entity.User)__getInternalInterface().getFieldValue(LASTJOBUSER_PROP.get());
  }
  
  /**
   * Gets the value of the LastPolicyGrp field.
   * The id of the last group that was assigned a policy for pre-renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastPolicyGrp() {
    return (entity.Group)__getInternalInterface().getFieldValue(LASTPOLICYGRP_PROP.get());
  }
  
  /**
   * Gets the value of the LastPolicyUser field.
   * The id of the last user that was assigned a policy for pre-renewal
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastPolicyUser() {
    return (entity.User)__getInternalInterface().getFieldValue(LASTPOLICYUSER_PROP.get());
  }
  
  /**
   * Gets the value of the LastReviewGrp field.
   * The id of the last group that was assigned an assignment review activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getLastReviewGrp() {
    return (entity.Group)__getInternalInterface().getFieldValue(LASTREVIEWGRP_PROP.get());
  }
  
  /**
   * Gets the value of the LastReviewUser field.
   * The id of the last user that was assigned an assignment review activity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getLastReviewUser() {
    return (entity.User)__getInternalInterface().getFieldValue(LASTREVIEWUSER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(LOCKINGCOLUMN_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
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
   * Gets the value of the GroupOnly field.
   * Flag indicating whether the row represents a Group assignment only, or a Group and User assignment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isGroupOnly() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(GROUPONLY_PROP.get());
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
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
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
   * Sets the value of the Fingerprint field.
   */
  public void setFingerprint(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FINGERPRINT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the GroupOnly field.
   */
  public void setGroupOnly(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(GROUPONLY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastAccountGrp field.
   */
  public void setLastAccountGrp(entity.Group value) {
    __getInternalInterface().setFieldValue(LASTACCOUNTGRP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastAccountUser field.
   */
  public void setLastAccountUser(entity.User value) {
    __getInternalInterface().setFieldValue(LASTACCOUNTUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastActivityGrp field.
   */
  public void setLastActivityGrp(entity.Group value) {
    __getInternalInterface().setFieldValue(LASTACTIVITYGRP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastActivityUser field.
   */
  public void setLastActivityUser(entity.User value) {
    __getInternalInterface().setFieldValue(LASTACTIVITYUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastJobGrp field.
   */
  public void setLastJobGrp(entity.Group value) {
    __getInternalInterface().setFieldValue(LASTJOBGRP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastJobUser field.
   */
  public void setLastJobUser(entity.User value) {
    __getInternalInterface().setFieldValue(LASTJOBUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastPolicyGrp field.
   */
  public void setLastPolicyGrp(entity.Group value) {
    __getInternalInterface().setFieldValue(LASTPOLICYGRP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastPolicyUser field.
   */
  public void setLastPolicyUser(entity.User value) {
    __getInternalInterface().setFieldValue(LASTPOLICYUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastReviewGrp field.
   */
  public void setLastReviewGrp(entity.Group value) {
    __getInternalInterface().setFieldValue(LASTREVIEWGRP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastReviewUser field.
   */
  public void setLastReviewUser(entity.User value) {
    __getInternalInterface().setFieldValue(LASTREVIEWUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LockingColumn field.
   */
  private void setLockingColumn(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(LOCKINGCOLUMN_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.DynamicAssignmentStateInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.DynamicAssignmentState.this.__getDelegateManager();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
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
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the Fingerprint field.
     * The fingerprint this state is tracking.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFingerprint() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FINGERPRINT_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the LastAccountGrp field.
     * The id of the last group that was assigned an account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getLastAccountGrp() {
      return (entity.Group)__getInternalInterface().getFieldValue(LASTACCOUNTGRP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastAccountGrpID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTACCOUNTGRP_PROP.get());
    }
    
    /**
     * Gets the value of the LastAccountUser field.
     * The id of the last user that was assigned an account.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getLastAccountUser() {
      return (entity.User)__getInternalInterface().getFieldValue(LASTACCOUNTUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastAccountUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTACCOUNTUSER_PROP.get());
    }
    
    /**
     * Gets the value of the LastActivityGrp field.
     * The id of the last group that was assigned an activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getLastActivityGrp() {
      return (entity.Group)__getInternalInterface().getFieldValue(LASTACTIVITYGRP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastActivityGrpID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTACTIVITYGRP_PROP.get());
    }
    
    /**
     * Gets the value of the LastActivityUser field.
     * The id of the last user that was assigned an activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getLastActivityUser() {
      return (entity.User)__getInternalInterface().getFieldValue(LASTACTIVITYUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastActivityUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTACTIVITYUSER_PROP.get());
    }
    
    /**
     * Gets the value of the LastJobGrp field.
     * The id of the last group that was assigned a job.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getLastJobGrp() {
      return (entity.Group)__getInternalInterface().getFieldValue(LASTJOBGRP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastJobGrpID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTJOBGRP_PROP.get());
    }
    
    /**
     * Gets the value of the LastJobUser field.
     * The id of the last user that was assigned a job.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getLastJobUser() {
      return (entity.User)__getInternalInterface().getFieldValue(LASTJOBUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastJobUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTJOBUSER_PROP.get());
    }
    
    /**
     * Gets the value of the LastPolicyGrp field.
     * The id of the last group that was assigned a policy for pre-renewal
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getLastPolicyGrp() {
      return (entity.Group)__getInternalInterface().getFieldValue(LASTPOLICYGRP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastPolicyGrpID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTPOLICYGRP_PROP.get());
    }
    
    /**
     * Gets the value of the LastPolicyUser field.
     * The id of the last user that was assigned a policy for pre-renewal
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getLastPolicyUser() {
      return (entity.User)__getInternalInterface().getFieldValue(LASTPOLICYUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastPolicyUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTPOLICYUSER_PROP.get());
    }
    
    /**
     * Gets the value of the LastReviewGrp field.
     * The id of the last group that was assigned an assignment review activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getLastReviewGrp() {
      return (entity.Group)__getInternalInterface().getFieldValue(LASTREVIEWGRP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastReviewGrpID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTREVIEWGRP_PROP.get());
    }
    
    /**
     * Gets the value of the LastReviewUser field.
     * The id of the last user that was assigned an assignment review activity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getLastReviewUser() {
      return (entity.User)__getInternalInterface().getFieldValue(LASTREVIEWUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLastReviewUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LASTREVIEWUSER_PROP.get());
    }
    
    /**
     * Gets the value of the LockingColumn field.
     * Meaningless column for locking
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getLockingColumn() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(LOCKINGCOLUMN_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
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
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the GroupOnly field.
     * Flag indicating whether the row represents a Group assignment only, or a Group and User assignment
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isGroupOnly() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(GROUPONLY_PROP.get());
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
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
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
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
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fingerprint field.
     */
    public void setFingerprint(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FINGERPRINT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the GroupOnly field.
     */
    public void setGroupOnly(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(GROUPONLY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastAccountGrp field.
     */
    public void setLastAccountGrp(entity.Group value) {
      __getInternalInterface().setFieldValue(LASTACCOUNTGRP_PROP.get(), value);
    }
    
    public void setLastAccountGrpID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTACCOUNTGRP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastAccountUser field.
     */
    public void setLastAccountUser(entity.User value) {
      __getInternalInterface().setFieldValue(LASTACCOUNTUSER_PROP.get(), value);
    }
    
    public void setLastAccountUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTACCOUNTUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastActivityGrp field.
     */
    public void setLastActivityGrp(entity.Group value) {
      __getInternalInterface().setFieldValue(LASTACTIVITYGRP_PROP.get(), value);
    }
    
    public void setLastActivityGrpID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTACTIVITYGRP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastActivityUser field.
     */
    public void setLastActivityUser(entity.User value) {
      __getInternalInterface().setFieldValue(LASTACTIVITYUSER_PROP.get(), value);
    }
    
    public void setLastActivityUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTACTIVITYUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastJobGrp field.
     */
    public void setLastJobGrp(entity.Group value) {
      __getInternalInterface().setFieldValue(LASTJOBGRP_PROP.get(), value);
    }
    
    public void setLastJobGrpID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTJOBGRP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastJobUser field.
     */
    public void setLastJobUser(entity.User value) {
      __getInternalInterface().setFieldValue(LASTJOBUSER_PROP.get(), value);
    }
    
    public void setLastJobUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTJOBUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastPolicyGrp field.
     */
    public void setLastPolicyGrp(entity.Group value) {
      __getInternalInterface().setFieldValue(LASTPOLICYGRP_PROP.get(), value);
    }
    
    public void setLastPolicyGrpID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTPOLICYGRP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastPolicyUser field.
     */
    public void setLastPolicyUser(entity.User value) {
      __getInternalInterface().setFieldValue(LASTPOLICYUSER_PROP.get(), value);
    }
    
    public void setLastPolicyUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTPOLICYUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastReviewGrp field.
     */
    public void setLastReviewGrp(entity.Group value) {
      __getInternalInterface().setFieldValue(LASTREVIEWGRP_PROP.get(), value);
    }
    
    public void setLastReviewGrpID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTREVIEWGRP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastReviewUser field.
     */
    public void setLastReviewUser(entity.User value) {
      __getInternalInterface().setFieldValue(LASTREVIEWUSER_PROP.get(), value);
    }
    
    public void setLastReviewUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(LASTREVIEWUSER_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LockingColumn field.
     */
    public void setLockingColumn(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(LOCKINGCOLUMN_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
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
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.DynamicAssignmentState.class, config);
    com.guidewire._generated.entity.DynamicAssignmentStateInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.DynamicAssignmentState, com.guidewire._generated.entity.DynamicAssignmentStateInternal>() {
      public java.lang.Object getImplementation(entity.DynamicAssignmentState bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.DynamicAssignmentStateInternal getInternalInterface(entity.DynamicAssignmentState bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.DynamicAssignmentState newEmptyInstance() {
        return new entity.DynamicAssignmentState((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}