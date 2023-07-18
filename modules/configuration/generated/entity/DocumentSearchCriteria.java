package entity;

/**
 * DocumentSearchCriteria
 * Non-persistent set of criteria to use in searching for a specific document.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DocumentSearchCriteria.eti;DocumentSearchCriteria.eix;DocumentSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "DocumentSearchCriteria")
public class DocumentSearchCriteria extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable, java.io.Serializable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.DocumentSearchCriteria> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.DocumentSearchCriteria>("entity.DocumentSearchCriteria");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ACCOUNT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Account");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUTHOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Author");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CONTINGENCY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Contingency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEFROM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateFrom");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATETO_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateTo");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DOCUMENTPUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DocumentPublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DOCUMENTSECURITYTYPES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "DocumentSecurityTypes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INCLUDEOBSOLETES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "IncludeObsoletes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOB_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Job");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LANGUAGE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Language");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAMEORID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NameOrID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PENDING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Pending");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYPERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> POLICYPERIODWRAPPERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PolicyPeriodWrappers");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SECTION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Section");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Type");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TYPEWRAPPERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "TypeWrappers");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.DocumentSearchCriteriaInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public DocumentSearchCriteria()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public DocumentSearchCriteria(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected DocumentSearchCriteria(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.DocumentSearchCriteriaInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.DocumentSearchCriteriaInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the DocumentSecurityTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper element) {
    __getInternalInterface().addArrayElement(DOCUMENTSECURITYTYPES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the PolicyPeriodWrappers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper element) {
    __getInternalInterface().addArrayElement(POLICYPERIODWRAPPERS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the TypeWrappers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTypeWrappers(entity.DocumentSearchTypeWrapper element) {
    __getInternalInterface().addArrayElement(TYPEWRAPPERS_PROP.get(), element);
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
   * Associated account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount() {
    return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the Author field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAuthor() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AUTHOR_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the Contingency field.
   * Associated contingency.
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
  
  /**
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the DocumentPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDocumentPublicID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUMENTPUBLICID_PROP.get());
  }
  
  /**
   * Gets the value of the DocumentSecurityTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSecurityTypeSearchWrapper[] getDocumentSecurityTypes() {
    return (entity.DocumentSecurityTypeSearchWrapper[])__getInternalInterface().getFieldValue(DOCUMENTSECURITYTYPES_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Job field.
   * Associated Job.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob() {
    return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
  }
  
  /**
   * Gets the value of the Language field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage() {
    return (typekey.LanguageType)__getInternalInterface().getFieldValue(LANGUAGE_PROP.get());
  }
  
  /**
   * Gets the value of the NameOrID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameOrID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEORID_PROP.get());
  }
  
  /**
   * Gets the value of the Policy field.
   * Associated policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Associated PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyPeriodWrappers field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSearchPolicyPeriodWrapper[] getPolicyPeriodWrappers() {
    return (entity.DocumentSearchPolicyPeriodWrapper[])__getInternalInterface().getFieldValue(POLICYPERIODWRAPPERS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  public java.lang.Object getRelatedTo() {
    return ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).getRelatedTo();
  }
  
  public java.lang.Object[] getRelatedToOptions() {
    return ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).getRelatedToOptions();
  }
  
  public java.lang.Object[] getRelatedToOptionsForAccount() {
    return ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).getRelatedToOptionsForAccount();
  }
  
  public java.lang.Object[] getRelatedToOptionsForPolicyFile(entity.PolicyPeriod policyPeriod) {
    return ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).getRelatedToOptionsForPolicyFile(policyPeriod);
  }
  
  /**
   * Gets the value of the Section field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentSection getSection() {
    return (typekey.DocumentSection)__getInternalInterface().getFieldValue(SECTION_PROP.get());
  }
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentStatusType getStatus() {
    return (typekey.DocumentStatusType)__getInternalInterface().getFieldValue(STATUS_PROP.get());
  }
  
  /**
   * Gets the value of the Type field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DocumentType getType() {
    return (typekey.DocumentType)__getInternalInterface().getFieldValue(TYPE_PROP.get());
  }
  
  /**
   * Gets the value of the TypeWrappers field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DocumentSearchTypeWrapper[] getTypeWrappers() {
    return (entity.DocumentSearchTypeWrapper[])__getInternalInterface().getFieldValue(TYPEWRAPPERS_PROP.get());
  }
  
  /**
   * Gets the value of the IncludeObsoletes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIncludeObsoletes() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INCLUDEOBSOLETES_PROP.get());
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
   * Gets the value of the Pending field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPending() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(PENDING_PROP.get());
  }
  
  /**
   * Returns a QueryProcessor containing {@link entity.Document} entities that match the
   * criteria specified by this entity.  This method needs to work with <code>IDocumentMetadataSource</code>
   * if enabled
   * @return a QueryProcessor containing {@link entity.Document} entities that match the criteria specified by this entity.
   */
  public gw.api.database.IQueryBeanResult performSearch() {
    return ((com.guidewire.pl.domain.document.DocumentSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentSearchCriteriaPublicMethods")).performSearch();
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
   * Removes the given element from the DocumentSecurityTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper element) {
    __getInternalInterface().removeArrayElement(DOCUMENTSECURITYTYPES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the DocumentSecurityTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDocumentSecurityTypes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DOCUMENTSECURITYTYPES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the PolicyPeriodWrappers array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper element) {
    __getInternalInterface().removeArrayElement(POLICYPERIODWRAPPERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PolicyPeriodWrappers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyPeriodWrappers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(POLICYPERIODWRAPPERS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the TypeWrappers array. This is achieved by marking the element for removal.
   */
  public void removeFromTypeWrappers(entity.DocumentSearchTypeWrapper element) {
    __getInternalInterface().removeArrayElement(TYPEWRAPPERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the TypeWrappers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTypeWrappers(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(TYPEWRAPPERS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value) {
    __getInternalInterface().setFieldValue(ACCOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(AUTHOR_PROP.get(), value);
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
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DocumentPublicID field.
   */
  public void setDocumentPublicID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DOCUMENTPUBLICID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DocumentSecurityTypes field.
   */
  public void setDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper[] value) {
    __getInternalInterface().setFieldValue(DOCUMENTSECURITYTYPES_PROP.get(), value);
  }
  
  public void setFixedContextWith(java.lang.Object value) {
    ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).setFixedContextWith(value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the IncludeObsoletes field.
   */
  public void setIncludeObsoletes(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INCLUDEOBSOLETES_PROP.get(), value);
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
   * Sets the value of the NameOrID field.
   */
  public void setNameOrID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAMEORID_PROP.get(), value);
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
   * Sets the value of the Pending field.
   */
  public void setPending(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PENDING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value) {
    __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyPeriodWrappers field.
   */
  public void setPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper[] value) {
    __getInternalInterface().setFieldValue(POLICYPERIODWRAPPERS_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  public void setRelatedTo(java.lang.Object value) {
    ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).setRelatedTo(value);
  }
  
  /**
   * Sets the value of the Section field.
   */
  public void setSection(typekey.DocumentSection value) {
    __getInternalInterface().setFieldValue(SECTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.DocumentStatusType value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.DocumentType value) {
    __getInternalInterface().setFieldValue(TYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TypeWrappers field.
   */
  public void setTypeWrappers(entity.DocumentSearchTypeWrapper[] value) {
    __getInternalInterface().setFieldValue(TYPEWRAPPERS_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.DocumentSearchCriteriaInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.DocumentSearchCriteria.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the DocumentSecurityTypes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper element) {
      __getInternalInterface().addArrayElement(DOCUMENTSECURITYTYPES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the PolicyPeriodWrappers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper element) {
      __getInternalInterface().addArrayElement(POLICYPERIODWRAPPERS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the TypeWrappers array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTypeWrappers(entity.DocumentSearchTypeWrapper element) {
      __getInternalInterface().addArrayElement(TYPEWRAPPERS_PROP.get(), element);
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
    
    public com.guidewire.pl.system.database.Query findDocuments() {
      return ((com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaInternalMethods")).findDocuments();
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
     * Associated account
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Account getAccount() {
      return (entity.Account)__getInternalInterface().getFieldValue(ACCOUNT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAccountID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ACCOUNT_PROP.get());
    }
    
    /**
     * Gets the value of the Author field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAuthor() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(AUTHOR_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Contingency field.
     * Associated contingency.
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
    
    /**
     * Gets the value of the Description field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the DocumentPublicID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDocumentPublicID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DOCUMENTPUBLICID_PROP.get());
    }
    
    /**
     * Gets the value of the DocumentSecurityTypes field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.DocumentSecurityTypeSearchWrapper[] getDocumentSecurityTypes() {
      return (entity.DocumentSecurityTypeSearchWrapper[])__getInternalInterface().getFieldValue(DOCUMENTSECURITYTYPES_PROP.get());
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
     * Associated Job.
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
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LanguageType getLanguage() {
      return (typekey.LanguageType)__getInternalInterface().getFieldValue(LANGUAGE_PROP.get());
    }
    
    public java.util.List<typekey.DocumentSecurityType> getLegalDocumentSecurityTypesForCurrentUser() {
      return ((com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaInternalMethods")).getLegalDocumentSecurityTypesForCurrentUser();
    }
    
    /**
     * Gets the value of the NameOrID field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNameOrID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEORID_PROP.get());
    }
    
    /**
     * Gets the value of the Policy field.
     * Associated policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Policy getPolicy() {
      return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICY_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyPeriod field.
     * Associated PolicyPeriod.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getPolicyPeriod() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyPeriodID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYPERIOD_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyPeriodWrappers field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.DocumentSearchPolicyPeriodWrapper[] getPolicyPeriodWrappers() {
      return (entity.DocumentSearchPolicyPeriodWrapper[])__getInternalInterface().getFieldValue(POLICYPERIODWRAPPERS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    public java.lang.Object getRelatedTo() {
      return ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).getRelatedTo();
    }
    
    public java.lang.Object[] getRelatedToOptions() {
      return ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).getRelatedToOptions();
    }
    
    public java.lang.Object[] getRelatedToOptionsForAccount() {
      return ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).getRelatedToOptionsForAccount();
    }
    
    public java.lang.Object[] getRelatedToOptionsForPolicyFile(entity.PolicyPeriod policyPeriod) {
      return ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).getRelatedToOptionsForPolicyFile(policyPeriod);
    }
    
    /**
     * Gets the value of the Section field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DocumentSection getSection() {
      return (typekey.DocumentSection)__getInternalInterface().getFieldValue(SECTION_PROP.get());
    }
    
    /**
     * Gets the value of the Status field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DocumentStatusType getStatus() {
      return (typekey.DocumentStatusType)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    /**
     * Gets the value of the Type field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DocumentType getType() {
      return (typekey.DocumentType)__getInternalInterface().getFieldValue(TYPE_PROP.get());
    }
    
    /**
     * Gets the value of the TypeWrappers field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.DocumentSearchTypeWrapper[] getTypeWrappers() {
      return (entity.DocumentSearchTypeWrapper[])__getInternalInterface().getFieldValue(TYPEWRAPPERS_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the IncludeObsoletes field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isIncludeObsoletes() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INCLUDEOBSOLETES_PROP.get());
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
     * Gets the value of the Pending field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPending() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PENDING_PROP.get());
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
    
    /**
     * Returns a QueryProcessor containing {@link entity.Document} entities that match the
     * criteria specified by this entity.  This method needs to work with <code>IDocumentMetadataSource</code>
     * if enabled
     * @return a QueryProcessor containing {@link entity.Document} entities that match the criteria specified by this entity.
     */
    public gw.api.database.IQueryBeanResult performSearch() {
      return ((com.guidewire.pl.domain.document.DocumentSearchCriteriaPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.document.DocumentSearchCriteriaPublicMethods")).performSearch();
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
    
    /**
     * Removes the given element from the DocumentSecurityTypes array. This is achieved by marking the element for removal.
     */
    public void removeFromDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper element) {
      __getInternalInterface().removeArrayElement(DOCUMENTSECURITYTYPES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the DocumentSecurityTypes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDocumentSecurityTypes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DOCUMENTSECURITYTYPES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the PolicyPeriodWrappers array. This is achieved by marking the element for removal.
     */
    public void removeFromPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper element) {
      __getInternalInterface().removeArrayElement(POLICYPERIODWRAPPERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PolicyPeriodWrappers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPolicyPeriodWrappers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(POLICYPERIODWRAPPERS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the TypeWrappers array. This is achieved by marking the element for removal.
     */
    public void removeFromTypeWrappers(entity.DocumentSearchTypeWrapper element) {
      __getInternalInterface().removeArrayElement(TYPEWRAPPERS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the TypeWrappers array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTypeWrappers(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TYPEWRAPPERS_PROP.get(), elementID);
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
     * Sets the value of the Author field.
     */
    public void setAuthor(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(AUTHOR_PROP.get(), value);
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
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DocumentPublicID field.
     */
    public void setDocumentPublicID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DOCUMENTPUBLICID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DocumentSecurityTypes field.
     */
    public void setDocumentSecurityTypes(entity.DocumentSecurityTypeSearchWrapper[] value) {
      __getInternalInterface().setFieldValue(DOCUMENTSECURITYTYPES_PROP.get(), value);
    }
    
    public void setFixedContextWith(java.lang.Object value) {
      ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).setFixedContextWith(value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the IncludeObsoletes field.
     */
    public void setIncludeObsoletes(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INCLUDEOBSOLETES_PROP.get(), value);
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
     * Sets the value of the NameOrID field.
     */
    public void setNameOrID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAMEORID_PROP.get(), value);
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
     * Sets the value of the Pending field.
     */
    public void setPending(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PENDING_PROP.get(), value);
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
    
    /**
     * Sets the value of the PolicyPeriod field.
     */
    public void setPolicyPeriod(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
    }
    
    public void setPolicyPeriodID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYPERIOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyPeriodWrappers field.
     */
    public void setPolicyPeriodWrappers(entity.DocumentSearchPolicyPeriodWrapper[] value) {
      __getInternalInterface().setFieldValue(POLICYPERIODWRAPPERS_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRelatedTo(java.lang.Object value) {
      ((com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods")).setRelatedTo(value);
    }
    
    /**
     * Sets the value of the Section field.
     */
    public void setSection(typekey.DocumentSection value) {
      __getInternalInterface().setFieldValue(SECTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.DocumentStatusType value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Type field.
     */
    public void setType(typekey.DocumentType value) {
      __getInternalInterface().setFieldValue(TYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TypeWrappers field.
     */
    public void setTypeWrappers(entity.DocumentSearchTypeWrapper[] value) {
      __getInternalInterface().setFieldValue(TYPEWRAPPERS_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethods", "com.guidewire.pc.domain.document.impl.DocumentSearchCriteriaCoreExtMethodsImpl");
    config.put("com.guidewire.pl.domain.document.DocumentSearchCriteriaPublicMethods", "com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaImpl");
    config.put("com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaInternalMethods", "com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.io.Serializable", "com.guidewire.pl.domain.document.impl.DocumentSearchCriteriaImpl");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.DocumentSearchCriteria.class, config);
    com.guidewire._generated.entity.DocumentSearchCriteriaInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.DocumentSearchCriteria, com.guidewire._generated.entity.DocumentSearchCriteriaInternal>() {
      public java.lang.Object getImplementation(entity.DocumentSearchCriteria bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.DocumentSearchCriteriaInternal getInternalInterface(entity.DocumentSearchCriteria bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.DocumentSearchCriteria newEmptyInstance() {
        return new entity.DocumentSearchCriteria((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}