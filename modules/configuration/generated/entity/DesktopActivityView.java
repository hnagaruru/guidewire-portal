package entity;

/**
 * DesktopActivityView
 * View bean for efficiently displaying activities on the Desktop page.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DesktopActivityView.eti;DesktopActivityView.eix;DesktopActivityView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "DesktopActivityView")
public class DesktopActivityView extends com.guidewire.pl.persistence.code.BeanBase implements entity.KeyableBean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.DesktopActivityView> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.DesktopActivityView>("entity.DesktopActivityView");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ASSIGNEDBYUSER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AssignedByUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ASSIGNEDUSERID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AssignedUserID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ASSIGNMENTSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AssignmentStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATEUSERID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateUserID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ESCALATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EscalationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> JOBID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "JobId");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> JOBNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "JobNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTVIEWEDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastViewedDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRIORITY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Priority");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SUBJECT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Subject");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATEUSERID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateUserID");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.DesktopActivityViewInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public DesktopActivityView()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public DesktopActivityView(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected DesktopActivityView(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.DesktopActivityViewInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.DesktopActivityViewInternal __getInternalInterface() {
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
   * Gets the value of the AssignedByUser field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getAssignedByUser() {
    return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(ASSIGNEDBYUSER_PROP.get());
  }
  
  /**
   * Gets the value of the AssignedUserID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getAssignedUserID() {
    return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(ASSIGNEDUSERID_PROP.get());
  }
  
  /**
   * Gets the value of the AssignmentStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AssignmentStatus getAssignmentStatus() {
    return (typekey.AssignmentStatus)__getInternalInterface().getFieldValue(ASSIGNMENTSTATUS_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUserID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getCreateUserID() {
    return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(CREATEUSERID_PROP.get());
  }
  
  /**
   * Gets the value of the EscalationDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEscalationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ESCALATIONDATE_PROP.get());
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
   * Gets the value of the JobId field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getJobId() {
    return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(JOBID_PROP.get());
  }
  
  /**
   * Gets the value of the JobNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJobNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(JOBNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the LastViewedDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastViewedDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LASTVIEWEDDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Priority field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Priority getPriority() {
    return (typekey.Priority)__getInternalInterface().getFieldValue(PRIORITY_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ActivityStatus getStatus() {
    return (typekey.ActivityStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
  }
  
  /**
   * Gets the value of the Subject field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSubject() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBJECT_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUserID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getUpdateUserID() {
    return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(UPDATEUSERID_PROP.get());
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
   * Sets the value of the AssignedByUser field.
   */
  public void setAssignedByUser(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ASSIGNEDBYUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AssignedUserID field.
   */
  public void setAssignedUserID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ASSIGNEDUSERID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AssignmentStatus field.
   */
  public void setAssignmentStatus(typekey.AssignmentStatus value) {
    __getInternalInterface().setFieldValue(ASSIGNMENTSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUserID field.
   */
  public void setCreateUserID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(CREATEUSERID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EscalationDate field.
   */
  public void setEscalationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ESCALATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JobId field.
   */
  public void setJobId(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(JOBID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JobNumber field.
   */
  public void setJobNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(JOBNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastViewedDate field.
   */
  public void setLastViewedDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(LASTVIEWEDDATE_PROP.get(), value);
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
  public void setPriority(typekey.Priority value) {
    __getInternalInterface().setFieldValue(PRIORITY_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ActivityStatus value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subject field.
   */
  public void setSubject(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SUBJECT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  public void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUserID field.
   */
  public void setUpdateUserID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(UPDATEUSERID_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.DesktopActivityViewInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.DesktopActivityView.this.__getDelegateManager();
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
     * Gets the value of the AssignedByUser field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getAssignedByUser() {
      return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(ASSIGNEDBYUSER_PROP.get());
    }
    
    /**
     * Gets the value of the AssignedUserID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getAssignedUserID() {
      return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(ASSIGNEDUSERID_PROP.get());
    }
    
    /**
     * Gets the value of the AssignmentStatus field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AssignmentStatus getAssignmentStatus() {
      return (typekey.AssignmentStatus)__getInternalInterface().getFieldValue(ASSIGNMENTSTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUserID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(CREATEUSERID_PROP.get());
    }
    
    /**
     * Gets the value of the EscalationDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEscalationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ESCALATIONDATE_PROP.get());
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
     * Gets the value of the JobId field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getJobId() {
      return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(JOBID_PROP.get());
    }
    
    /**
     * Gets the value of the JobNumber field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getJobNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(JOBNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the LastViewedDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLastViewedDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LASTVIEWEDDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Priority field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Priority getPriority() {
      return (typekey.Priority)__getInternalInterface().getFieldValue(PRIORITY_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the Status field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ActivityStatus getStatus() {
      return (typekey.ActivityStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    /**
     * Gets the value of the Subject field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getSubject() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SUBJECT_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateTime field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUserID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(UPDATEUSERID_PROP.get());
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
     * Sets the value of the AssignedByUser field.
     */
    public void setAssignedByUser(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ASSIGNEDBYUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AssignedUserID field.
     */
    public void setAssignedUserID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ASSIGNEDUSERID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AssignmentStatus field.
     */
    public void setAssignmentStatus(typekey.AssignmentStatus value) {
      __getInternalInterface().setFieldValue(ASSIGNMENTSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUserID field.
     */
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(CREATEUSERID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EscalationDate field.
     */
    public void setEscalationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ESCALATIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the JobId field.
     */
    public void setJobId(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(JOBID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the JobNumber field.
     */
    public void setJobNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(JOBNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastViewedDate field.
     */
    public void setLastViewedDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(LASTVIEWEDDATE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
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
    public void setPriority(typekey.Priority value) {
      __getInternalInterface().setFieldValue(PRIORITY_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.ActivityStatus value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subject field.
     */
    public void setSubject(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SUBJECT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUserID field.
     */
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(UPDATEUSERID_PROP.get(), value);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.DesktopActivityView.class, config);
    com.guidewire._generated.entity.DesktopActivityViewInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.DesktopActivityView, com.guidewire._generated.entity.DesktopActivityViewInternal>() {
      public java.lang.Object getImplementation(entity.DesktopActivityView bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.DesktopActivityViewInternal getInternalInterface(entity.DesktopActivityView bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.DesktopActivityView newEmptyInstance() {
        return new entity.DesktopActivityView((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}