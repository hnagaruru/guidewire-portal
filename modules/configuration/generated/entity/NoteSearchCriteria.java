package entity;

/**
 * NoteSearchCriteria
 * Non-persistent set of criteria to use in searching for a specific note.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NoteSearchCriteria.eti;NoteSearchCriteria.eix;NoteSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "NoteSearchCriteria")
public class NoteSearchCriteria extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable, java.io.Serializable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.NoteSearchCriteria> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.NoteSearchCriteria>("entity.NoteSearchCriteria");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Account");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACTIVITY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Activity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> AUTHOR_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Author");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CONTINGENCY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Contingency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEFROM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateFrom");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATETO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateTo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOB_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Job");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LANGUAGE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Language");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SORTASCENDING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SortAscending");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SORTBY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SortBy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TEXT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Text");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOPIC_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Topic");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.NoteSearchCriteriaInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public NoteSearchCriteria()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public NoteSearchCriteria(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected NoteSearchCriteria(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.NoteSearchCriteriaInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.NoteSearchCriteriaInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public gw.api.database.IQuery addCriteria() {
    return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).addCriteria();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the Account field.
   * Account that this note is related to, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount() {
    return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the Activity field.
   * Activity note is assigned to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity getActivity() {
    return (entity.Activity)__getInternalInterface().getFieldValue(ACTIVITY_PROP.get());
  }
  
  /**
   * Gets the value of the Author field.
   * Note author
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAuthor() {
    return (entity.User)__getInternalInterface().getFieldValue(AUTHOR_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the Contingency field.
   * Contingency that this note is related to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency getContingency() {
    return (entity.Contingency)__getInternalInterface().getFieldValue(CONTINGENCY_PROP.get());
  }
  
  /**
   * Gets the value of the DateFrom field.
   * Date From
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateFrom() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATEFROM_PROP.get());
  }
  
  /**
   * Gets the value of the DateTo field.
   * Date To
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTo() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATETO_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Job field.
   * Job note is on
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob() {
    return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
  }
  
  /**
   * Gets the value of the Language field.
   * Language search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage() {
    return (typekey.LanguageType)__getInternalInterface().getFieldValue(LANGUAGE_PROP.get());
  }
  
  /**
   * Gets the value of the Policy field.
   * Policy note is on
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  public java.lang.Object getRelatedTo() {
    return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getRelatedTo();
  }
  
  public java.lang.Object[] getRelatedToOptions() {
    return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getRelatedToOptions();
  }
  
  public java.lang.Object[] getRelatedToOptionsForAccount() {
    return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getRelatedToOptionsForAccount();
  }
  
  public java.lang.Object[] getRelatedToOptionsForPolicyFile(entity.PolicyPeriod policyPeriod) {
    return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getRelatedToOptionsForPolicyFile(policyPeriod);
  }
  
  public java.lang.Object[] getSecurityTypes() {
    return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getSecurityTypes();
  }
  
  /**
   * Gets the value of the SortBy field.
   * Options to sort the list of notes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SortByRange getSortBy() {
    return (typekey.SortByRange)__getInternalInterface().getFieldValue(SORTBY_PROP.get());
  }
  
  public typekey.SortByRange[] getSortByRange() {
    return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getSortByRange();
  }
  
  /**
   * Gets the value of the Text field.
   * Text search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getText() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TEXT_PROP.get());
  }
  
  /**
   * Gets the value of the Topic field.
   * Topic search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteTopicType getTopic() {
    return (typekey.NoteTopicType)__getInternalInterface().getFieldValue(TOPIC_PROP.get());
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
   * Gets the value of the SortAscending field.
   * Sort Ascending or not
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSortAscending() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SORTASCENDING_PROP.get());
  }
  
  public gw.api.database.IQueryBeanResult<entity.Note> performSearch() {
    return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).performSearch();
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
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value) {
    __getInternalInterface().setFieldValue(ACCOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Activity field.
   */
  public void setActivity(entity.Activity value) {
    __getInternalInterface().setFieldValue(ACTIVITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(entity.User value) {
    __getInternalInterface().setFieldValue(AUTHOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Contingency field.
   */
  public void setContingency(entity.Contingency value) {
    __getInternalInterface().setFieldValue(CONTINGENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DateFrom field.
   */
  public void setDateFrom(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATEFROM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DateTo field.
   */
  public void setDateTo(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATETO_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value) {
    __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value) {
    __getInternalInterface().setFieldValue(LANGUAGE_PROP.get(), value);
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
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value) {
    __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  public void setRelatedTo(java.lang.Object value) {
    ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).setRelatedTo(value);
  }
  
  public void setSecurityTypes(java.lang.Object[] value) {
    ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).setSecurityTypes(value);
  }
  
  /**
   * Sets the value of the SortAscending field.
   */
  public void setSortAscending(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(SORTASCENDING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SortBy field.
   */
  public void setSortBy(typekey.SortByRange value) {
    __getInternalInterface().setFieldValue(SORTBY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Text field.
   */
  public void setText(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TEXT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Topic field.
   */
  public void setTopic(typekey.NoteTopicType value) {
    __getInternalInterface().setFieldValue(TOPIC_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.NoteSearchCriteriaInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.NoteSearchCriteria.this.__getDelegateManager();
    }
    
    public gw.api.database.IQuery addCriteria() {
      return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).addCriteria();
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
    
    /**
     * Gets the value of the Account field.
     * Account that this note is related to, if any
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Account getAccount() {
      return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAccountID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACCOUNT_PROP.get());
    }
    
    /**
     * Gets the value of the Activity field.
     * Activity note is assigned to
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Activity getActivity() {
      return (entity.Activity)__getInternalInterface().getFieldValue(ACTIVITY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getActivityID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACTIVITY_PROP.get());
    }
    
    /**
     * Gets the value of the Author field.
     * Note author
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getAuthor() {
      return (entity.User)__getInternalInterface().getFieldValue(AUTHOR_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAuthorID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(AUTHOR_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Contingency field.
     * Contingency that this note is related to
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contingency getContingency() {
      return (entity.Contingency)__getInternalInterface().getFieldValue(CONTINGENCY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getContingencyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CONTINGENCY_PROP.get());
    }
    
    /**
     * Gets the value of the DateFrom field.
     * Date From
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateFrom() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATEFROM_PROP.get());
    }
    
    /**
     * Gets the value of the DateTo field.
     * Date To
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateTo() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATETO_PROP.get());
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
     * Gets the value of the Job field.
     * Job note is on
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Job getJob() {
      return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getJobID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(JOB_PROP.get());
    }
    
    /**
     * Gets the value of the Language field.
     * Language search
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LanguageType getLanguage() {
      return (typekey.LanguageType)__getInternalInterface().getFieldValue(LANGUAGE_PROP.get());
    }
    
    /**
     * Gets the value of the Policy field.
     * Policy note is on
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Policy getPolicy() {
      return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICY_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    public java.lang.Object getRelatedTo() {
      return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getRelatedTo();
    }
    
    public java.lang.Object[] getRelatedToOptions() {
      return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getRelatedToOptions();
    }
    
    public java.lang.Object[] getRelatedToOptionsForAccount() {
      return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getRelatedToOptionsForAccount();
    }
    
    public java.lang.Object[] getRelatedToOptionsForPolicyFile(entity.PolicyPeriod policyPeriod) {
      return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getRelatedToOptionsForPolicyFile(policyPeriod);
    }
    
    public java.lang.Object[] getSecurityTypes() {
      return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getSecurityTypes();
    }
    
    /**
     * Gets the value of the SortBy field.
     * Options to sort the list of notes
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.SortByRange getSortBy() {
      return (typekey.SortByRange)__getInternalInterface().getFieldValue(SORTBY_PROP.get());
    }
    
    public typekey.SortByRange[] getSortByRange() {
      return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).getSortByRange();
    }
    
    /**
     * Gets the value of the Text field.
     * Text search
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getText() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TEXT_PROP.get());
    }
    
    /**
     * Gets the value of the Topic field.
     * Topic search
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.NoteTopicType getTopic() {
      return (typekey.NoteTopicType)__getInternalInterface().getFieldValue(TOPIC_PROP.get());
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
    
    /**
     * Gets the value of the SortAscending field.
     * Sort Ascending or not
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isSortAscending() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(SORTASCENDING_PROP.get());
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
    
    public gw.api.database.IQueryBeanResult<entity.Note> performSearch() {
      return ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).performSearch();
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
     * Sets the value of the Account field.
     */
    public void setAccount(entity.Account value) {
      __getInternalInterface().setFieldValue(ACCOUNT_PROP.get(), value);
    }
    
    public void setAccountID(gw.pl.persistence.core.Key value) {
      setFieldValue(ACCOUNT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Activity field.
     */
    public void setActivity(entity.Activity value) {
      __getInternalInterface().setFieldValue(ACTIVITY_PROP.get(), value);
    }
    
    public void setActivityID(gw.pl.persistence.core.Key value) {
      setFieldValue(ACTIVITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Author field.
     */
    public void setAuthor(entity.User value) {
      __getInternalInterface().setFieldValue(AUTHOR_PROP.get(), value);
    }
    
    public void setAuthorID(gw.pl.persistence.core.Key value) {
      setFieldValue(AUTHOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Contingency field.
     */
    public void setContingency(entity.Contingency value) {
      __getInternalInterface().setFieldValue(CONTINGENCY_PROP.get(), value);
    }
    
    public void setContingencyID(gw.pl.persistence.core.Key value) {
      setFieldValue(CONTINGENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateFrom field.
     */
    public void setDateFrom(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATEFROM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateTo field.
     */
    public void setDateTo(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATETO_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Job field.
     */
    public void setJob(entity.Job value) {
      __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
    }
    
    public void setJobID(gw.pl.persistence.core.Key value) {
      setFieldValue(JOB_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Language field.
     */
    public void setLanguage(typekey.LanguageType value) {
      __getInternalInterface().setFieldValue(LANGUAGE_PROP.get(), value);
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
     * Sets the value of the Policy field.
     */
    public void setPolicy(entity.Policy value) {
      __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
    }
    
    public void setPolicyID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICY_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRelatedTo(java.lang.Object value) {
      ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).setRelatedTo(value);
    }
    
    public void setSecurityTypes(java.lang.Object[] value) {
      ((com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods")).setSecurityTypes(value);
    }
    
    /**
     * Sets the value of the SortAscending field.
     */
    public void setSortAscending(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(SORTASCENDING_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SortBy field.
     */
    public void setSortBy(typekey.SortByRange value) {
      __getInternalInterface().setFieldValue(SORTBY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Text field.
     */
    public void setText(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TEXT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Topic field.
     */
    public void setTopic(typekey.NoteTopicType value) {
      __getInternalInterface().setFieldValue(TOPIC_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods", "com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethodsImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.io.Serializable", "com.guidewire.pl.domain.note.impl.NoteSearchCriteriaImpl");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.NoteSearchCriteria.class, config);
    com.guidewire._generated.entity.NoteSearchCriteriaInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.NoteSearchCriteria, com.guidewire._generated.entity.NoteSearchCriteriaInternal>() {
      public java.lang.Object getImplementation(entity.NoteSearchCriteria bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.NoteSearchCriteriaInternal getInternalInterface(entity.NoteSearchCriteria bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.NoteSearchCriteria newEmptyInstance() {
        return new entity.NoteSearchCriteria((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}