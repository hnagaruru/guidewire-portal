package entity;

/**
 * PendingUpdatesWorkItem
 * WorkItem to apply the pending updates to account-level entities
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingUpdatesWorkItem.eti;PendingUpdatesWorkItem.eix;PendingUpdatesWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PendingUpdatesWorkItem extends com.guidewire.pl.persistence.code.BeanBase implements entity.KeyableBean, entity.WorkItem {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PendingUpdatesWorkItem> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PendingUpdatesWorkItem>("entity.PendingUpdatesWorkItem");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ATTEMPTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Attempts");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AVAILABLESINCE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AvailableSince");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHECKEDOUTBY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CheckedOutBy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATIONTIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreationTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXCEPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Exception");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTUPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastUpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRIORITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Priority");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PROCESSHISTORYID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProcessHistoryID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TARGET_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Target");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PendingUpdatesWorkItemInternal _internal;
  
  protected PendingUpdatesWorkItem(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.PendingUpdatesWorkItemInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.PendingUpdatesWorkItemInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Postpone work item for later retrial
   * @param availableSince The time to retry work item
   * @param now Current time (used to update LastUpdateTime timestamp).
   * @deprecated This method is not intended to be accessed directly and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void checkIn(java.util.Date availableSince, java.util.Date now) {
    ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).checkIn(availableSince, now);
  }
  
  /**
   * Check out a work item. The progressInterval is used to calculate
   * the AvailableSince date to set (checkoutTime + 2 * progressInterval).
   * The AvailableSince date is used to find orphans.
   * @param checkoutTime The time of check out
   * @param instanceNumber The instance number of the worker doing the check out
   * @param progressInterval progress interval
   * @deprecated This method is not intended to be accessed directly and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void checkOut(java.util.Date checkoutTime, int instanceNumber, long progressInterval) {
    ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).checkOut(checkoutTime, instanceNumber, progressInterval);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Fail work item
   * @param failDate The time of failure
   * @param exception optional exception string. If <code>null</code> exception field on the work item
   *                  is not modified (current value will be preserved).
   * @deprecated This method is not intended to be accessed directly and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void fail(java.util.Date failDate, java.lang.String exception) {
    ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).fail(failDate, exception);
  }
  
  /**
   * Gets the value of the Attempts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAttempts() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(ATTEMPTS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAvailableSince() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(AVAILABLESINCE_PROP.get());
  }
  
  /**
   * Return AvailableSince as Date value. May be <code>null</code>
   * @return AvailableSince as Date value
   */
  public java.util.Date getAvailableSinceAsDate() {
    return ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).getAvailableSinceAsDate();
  }
  
  /**
   * Return AvailableSince as Long value. May be <code>null</code>
   * @return AvailableSince as Long value
   */
  public java.lang.Long getAvailableSinceAsLong() {
    return ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).getAvailableSinceAsLong();
  }
  
  /**
   * Gets the value of the CheckedOutBy field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCheckedOutBy() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHECKEDOUTBY_PROP.get());
  }
  
  /**
   * Gets the value of the CreationTime field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreationTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATIONTIME_PROP.get());
  }
  
  /**
   * Gets the value of the Exception field.
   * Stack trace of the exception
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getException() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(EXCEPTION_PROP.get());
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
   * Gets the value of the LastUpdateTime field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LASTUPDATETIME_PROP.get());
  }
  
  /**
   * Return that number of retries, i.e. Attempts - 1.
   * Added for backward compatibility.
   * @return number of retries of the work item.
   */
  public java.lang.Integer getNumRetries() {
    return ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).getNumRetries();
  }
  
  /**
   * Gets the value of the Priority field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPriority() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(PRIORITY_PROP.get());
  }
  
  /**
   * Return {@link ProcessHistory} that may be <code>null</code>
   * @return {@link entity.ProcessHistory} that may be <code>null</code>
   */
  public entity.ProcessHistory getProcessHistory() {
    return ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).getProcessHistory();
  }
  
  /**
   * Gets the value of the ProcessHistoryID field.
   * The writer batch job that created this workitem (ProcessHistory).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getProcessHistoryID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(PROCESSHISTORYID_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the Status field.
   * Status of this workitem.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WorkItemStatusType getStatus() {
    return (typekey.WorkItemStatusType)__getInternalInterface().getFieldValue(STATUS_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PendingUpdatesWorkItem getSubtype() {
    return (typekey.PendingUpdatesWorkItem)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the Target field.
   * Reference to the account-level entity that contains a set of pending updates that need to be applied.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getTarget() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(TARGET_PROP.get());
  }
  
  /**
   * Initialize a work item. Call this method after setting all other fields on the work item.
   * The method sets work item creation time, last update time, and processing time according to work item priority.
   */
  public void initialize() {
    ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).initialize();
  }
  
  /**
   * Initialize a work item. Call this method after setting all other fields on the work item.
   * The method sets work item creation time, last update time, and processing time according to work item priority.
   * @param now Current time (used to update LastUpdateTime timestamp).
   * @deprecated Replaced by {@link #initialize()} and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void initialize(java.util.Date now) {
    ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).initialize(now);
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
   * Sets the value of the Attempts field.
   */
  public void setAttempts(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(ATTEMPTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AvailableSince field.
   */
  private void setAvailableSince(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(AVAILABLESINCE_PROP.get(), value);
  }
  
  /**
   * Sets AvailableSince.
   * @param val AvailableSince. May be <code>null</code>
   */
  public void setAvailableSinceAsLong(java.lang.Long val) {
    ((com.guidewire.pl.domain.workqueue.WorkItemPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.workqueue.WorkItemPublicMethods")).setAvailableSinceAsLong(val);
  }
  
  /**
   * Sets the value of the CheckedOutBy field.
   */
  public void setCheckedOutBy(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CHECKEDOUTBY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreationTime field.
   */
  private void setCreationTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATIONTIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Exception field.
   */
  private void setException(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(EXCEPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastUpdateTime field.
   */
  public void setLastUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(LASTUPDATETIME_PROP.get(), value);
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
   * Sets the value of the Priority field.
   */
  public void setPriority(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(PRIORITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProcessHistoryID field.
   */
  public void setProcessHistoryID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(PROCESSHISTORYID_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the Status field.
   */
  private void setStatus(typekey.WorkItemStatusType value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.PendingUpdatesWorkItem value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Target field.
   */
  public void setTarget(java.lang.Long value) {
    __getInternalInterface().setFieldValue(TARGET_PROP.get(), value);
  }
  
  static {
    com.guidewire._generated.entity.PendingUpdatesWorkItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PendingUpdatesWorkItem, com.guidewire._generated.entity.PendingUpdatesWorkItemInternal>() {
      public java.lang.Object getImplementation(entity.PendingUpdatesWorkItem bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PendingUpdatesWorkItemInternal getInternalInterface(entity.PendingUpdatesWorkItem bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}