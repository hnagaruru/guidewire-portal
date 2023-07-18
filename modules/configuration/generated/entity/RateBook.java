package entity;

/**
 * RateBook
 * Describes which versions of which rate tables comprise a rate book
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateBook.eti;RateBook.eix;RateBook.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RateBook")
public class RateBook extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RateBook> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RateBook>("entity.RateBook");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOKCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BookCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOKDESC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BookDesc");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BOOKDESC_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BookDesc_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOKEDITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BookEdition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOKGROUP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BookGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BOOKJURISDICTION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "BookJurisdiction");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOKNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BookName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> BOOKNAME_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "BookName_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOKOFFERING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BookOffering");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CASCADEDLOOKUP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CascadedLookup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPORTLOCK_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExportLock");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTSTATUSCHANGEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastStatusChangeDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTTABLEROWEDIT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastTableRowEdit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYLINE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyLine");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RATEBOOKCALCROUTINES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RateBookCalcRoutines");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RATEBOOKEXPORTRESULTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RateBookExportResults");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RATETABLES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RateTables");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RATEBOOKS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Ratebooks");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RENEWALEFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RenewalEffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UWCOMPANY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UWCompany");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RateBookInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RateBook()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RateBook(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RateBook(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RateBookInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RateBookInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the RateBookCalcRoutines array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateBookCalcRoutines(entity.RateBookCalcRoutine element) {
    __getInternalInterface().addArrayElement(RATEBOOKCALCROUTINES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the RateBookExportResults array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateBookExportResults(entity.RateBookExportResult element) {
    __getInternalInterface().addArrayElement(RATEBOOKEXPORTRESULTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the RateTables array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateTables(entity.RateTable element) {
    __getInternalInterface().addArrayElement(RATETABLES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Ratebooks array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToRatebooks(entity.ImpactTestingRateBook element) {
    __getInternalInterface().addArrayElement(RATEBOOKS_PROP.get(), element);
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
   * Gets the value of the BookCode field.
   * The rate book code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKCODE_PROP.get());
  }
  
  /**
   * Gets the value of the BookDesc field.
   * Optional detailed description of the rate book.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookDesc() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKDESC_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook_BookDesc_L10N[] getBookDesc_L10N_ARRAY() {
    return (entity.RateBook_BookDesc_L10N[])__getInternalInterface().getFieldValue(BOOKDESC_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array BookDesc_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookDesc_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("BookDesc_en_US"));
  }
  
  /**
   * Gets the value of the BookEdition field.
   * The edition of the rate book. This, combined with the 'BookName', identifies the rate book to the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookEdition() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKEDITION_PROP.get());
  }
  
  /**
   * Gets the value of the BookGroup field.
   * Tag used for grouping RateBooks; used in RateBook lookup relaxation ordering.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookGroup() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKGROUP_PROP.get());
  }
  
  /**
   * Gets the value of the BookJurisdiction field.
   * The Jurisdiction this books applies to; countrywide is null
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getBookJurisdiction() {
    return (typekey.Jurisdiction)__getInternalInterface().getFieldValue(BOOKJURISDICTION_PROP.get());
  }
  
  /**
   * Gets the value of the BookName field.
   * The name of the rate book. This, combined with the 'BookEdition', identifies the rate book to the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKNAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook_BookName_L10N[] getBookName_L10N_ARRAY() {
    return (entity.RateBook_BookName_L10N[])__getInternalInterface().getFieldValue(BOOKNAME_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array BookName_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookName_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("BookName_en_US"));
  }
  
  /**
   * Gets the value of the BookOffering field.
   * The offering this books applies to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookOffering() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKOFFERING_PROP.get());
  }
  
  public entity.CalcRoutineDefinition getCalcRoutineFromActiveRateBook(java.lang.String code) {
    return ((com.guidewire.pc.domain.rating.RateBookPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateBookPublicMethods")).getCalcRoutineFromActiveRateBook(code);
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
   * Gets the value of the EffectiveDate field.
   * The earliest policy effective date that can be rated using this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ExpirationDate field.
   * The latest policy effective date that can be rated using this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPIRATIONDATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LastStatusChangeDate field.
   * The (calendar) date of the last Status change
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastStatusChangeDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LASTSTATUSCHANGEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the LastTableRowEdit field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastTableRowEdit() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LASTTABLEROWEDIT_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyLine field.
   * Code of the Policy Line that the rate table belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLine() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYLINE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RateBookCalcRoutines field.
   * Which rate routines are used in this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBookCalcRoutine[] getRateBookCalcRoutines() {
    return (entity.RateBookCalcRoutine[])__getInternalInterface().getFieldValue(RATEBOOKCALCROUTINES_PROP.get());
  }
  
  /**
   * Gets the value of the RateBookExportResults field.
   * List of rate book export results
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBookExportResult[] getRateBookExportResults() {
    return (entity.RateBookExportResult[])__getInternalInterface().getFieldValue(RATEBOOKEXPORTRESULTS_PROP.get());
  }
  
  public java.util.List<entity.RateBook> getRateBookHierarchy() {
    return ((com.guidewire.pc.domain.rating.RateBookPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateBookPublicMethods")).getRateBookHierarchy();
  }
  
  /**
   * Gets the value of the RateTables field.
   * Which logical rate tables are in this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable[] getRateTables() {
    return (entity.RateTable[])__getInternalInterface().getFieldValue(RATETABLES_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ImpactTestingRateBook[] getRatebooks() {
    return (entity.ImpactTestingRateBook[])__getInternalInterface().getFieldValue(RATEBOOKS_PROP.get());
  }
  
  /**
   * Gets the value of the RenewalEffectiveDate field.
   * The earliest policy renewal effective date that can be rated using this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRenewalEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(RENEWALEFFECTIVEDATE_PROP.get());
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
   * Gets the value of the Status field.
   * The status determines things such as whether the rate book may be changed or be brought back into an editable state, whether it has been approved for production, and whether it has been put into production.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateBookStatus getStatus() {
    return (typekey.RateBookStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
  }
  
  public entity.RateTable getTable(java.lang.String code) {
    return ((com.guidewire.pc.domain.rating.RateBookPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateBookPublicMethods")).getTable(code);
  }
  
  /**
   * Gets the value of the UWCompany field.
   * The Underwriting company that insures policies that are rated using this book.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWCompany getUWCompany() {
    return (entity.UWCompany)__getInternalInterface().getFieldValue(UWCOMPANY_PROP.get());
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
   * Gets the value of the CascadedLookup field.
   * If it is true we continue to look past this ratebook for rateTables and rateRoutines
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCascadedLookup() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CASCADEDLOOKUP_PROP.get());
  }
  
  /**
   * Gets the value of the ExportLock field.
   * Indicates that this ratebook is being exported, so it's locked to prevent edits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExportLock() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXPORTLOCK_PROP.get());
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
   * Removes the given element from the RateBookCalcRoutines array. This is achieved by marking the element for removal.
   */
  public void removeFromRateBookCalcRoutines(entity.RateBookCalcRoutine element) {
    __getInternalInterface().removeArrayElement(RATEBOOKCALCROUTINES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RateBookCalcRoutines array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateBookCalcRoutines(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RATEBOOKCALCROUTINES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the RateBookExportResults array. This is achieved by marking the element for removal.
   */
  public void removeFromRateBookExportResults(entity.RateBookExportResult element) {
    __getInternalInterface().removeArrayElement(RATEBOOKEXPORTRESULTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RateBookExportResults array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateBookExportResults(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RATEBOOKEXPORTRESULTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the RateTables array. This is achieved by marking the element for removal.
   */
  public void removeFromRateTables(entity.RateTable element) {
    __getInternalInterface().removeArrayElement(RATETABLES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the RateTables array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateTables(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RATETABLES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Ratebooks array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void removeFromRatebooks(entity.ImpactTestingRateBook element) {
    __getInternalInterface().removeArrayElement(RATEBOOKS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Ratebooks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRatebooks(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(RATEBOOKS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BookCode field.
   */
  public void setBookCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BOOKCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BookDesc field.
   */
  public void setBookDesc(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BOOKDESC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BookDesc_L10N_ARRAY field.
   */
  private void setBookDesc_L10N_ARRAY(entity.RateBook_BookDesc_L10N[] value) {
    __getInternalInterface().setFieldValue(BOOKDESC_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key BookDesc_ on array BookDesc_L10N_ARRAY
   */
  public void setBookDesc_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("BookDesc_en_US"), value);
  }
  
  /**
   * Sets the value of the BookEdition field.
   */
  public void setBookEdition(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BOOKEDITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BookGroup field.
   */
  public void setBookGroup(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BOOKGROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BookJurisdiction field.
   */
  public void setBookJurisdiction(typekey.Jurisdiction value) {
    __getInternalInterface().setFieldValue(BOOKJURISDICTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BookName field.
   */
  public void setBookName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BOOKNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BookName_L10N_ARRAY field.
   */
  private void setBookName_L10N_ARRAY(entity.RateBook_BookName_L10N[] value) {
    __getInternalInterface().setFieldValue(BOOKNAME_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key BookName_ on array BookName_L10N_ARRAY
   */
  public void setBookName_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("BookName_en_US"), value);
  }
  
  /**
   * Sets the value of the BookOffering field.
   */
  public void setBookOffering(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BOOKOFFERING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CascadedLookup field.
   */
  public void setCascadedLookup(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CASCADEDLOOKUP_PROP.get(), value);
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
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpirationDate field.
   */
  public void setExpirationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExportLock field.
   */
  public void setExportLock(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(EXPORTLOCK_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastStatusChangeDate field.
   */
  public void setLastStatusChangeDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(LASTSTATUSCHANGEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastTableRowEdit field.
   */
  public void setLastTableRowEdit(java.util.Date value) {
    __getInternalInterface().setFieldValue(LASTTABLEROWEDIT_PROP.get(), value);
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
   * Sets the value of the PolicyLine field.
   */
  public void setPolicyLine(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYLINE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RateBookCalcRoutines field.
   */
  public void setRateBookCalcRoutines(entity.RateBookCalcRoutine[] value) {
    __getInternalInterface().setFieldValue(RATEBOOKCALCROUTINES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RateBookExportResults field.
   */
  public void setRateBookExportResults(entity.RateBookExportResult[] value) {
    __getInternalInterface().setFieldValue(RATEBOOKEXPORTRESULTS_PROP.get(), value);
  }
  
  public void setRateBookHierarchy(java.util.List<entity.RateBook> rateBookHierarchy) {
    ((com.guidewire.pc.domain.rating.RateBookPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateBookPublicMethods")).setRateBookHierarchy(rateBookHierarchy);
  }
  
  /**
   * Sets the value of the RateTables field.
   */
  public void setRateTables(entity.RateTable[] value) {
    __getInternalInterface().setFieldValue(RATETABLES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Ratebooks field.
   */
  private void setRatebooks(entity.ImpactTestingRateBook[] value) {
    __getInternalInterface().setFieldValue(RATEBOOKS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RenewalEffectiveDate field.
   */
  public void setRenewalEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(RENEWALEFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.RateBookStatus value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UWCompany field.
   */
  public void setUWCompany(entity.UWCompany value) {
    __getInternalInterface().setFieldValue(UWCOMPANY_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RateBookInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RateBook.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the BookDesc_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBookDesc_L10N_ARRAY(entity.RateBook_BookDesc_L10N element) {
      __getInternalInterface().addArrayElement(BOOKDESC_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the BookName_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToBookName_L10N_ARRAY(entity.RateBook_BookName_L10N element) {
      __getInternalInterface().addArrayElement(BOOKNAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RateBookCalcRoutines array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRateBookCalcRoutines(entity.RateBookCalcRoutine element) {
      __getInternalInterface().addArrayElement(RATEBOOKCALCROUTINES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RateBookExportResults array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRateBookExportResults(entity.RateBookExportResult element) {
      __getInternalInterface().addArrayElement(RATEBOOKEXPORTRESULTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RateTables array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRateTables(entity.RateTable element) {
      __getInternalInterface().addArrayElement(RATETABLES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Ratebooks array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRatebooks(entity.ImpactTestingRateBook element) {
      __getInternalInterface().addArrayElement(RATEBOOKS_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void beforeUpdate() {
      ((com.guidewire.pl.system.bundle.UpdateCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.UpdateCallback")).beforeUpdate();
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
     * Gets the value of the BookCode field.
     * The rate book code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBookCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKCODE_PROP.get());
    }
    
    /**
     * Gets the value of the BookDesc field.
     * Optional detailed description of the rate book.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBookDesc() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKDESC_PROP.get());
    }
    
    /**
     * Gets the value of the BookDesc_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateBook_BookDesc_L10N[] getBookDesc_L10N_ARRAY() {
      return (entity.RateBook_BookDesc_L10N[])__getInternalInterface().getFieldValue(BOOKDESC_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition BookDesc_L10N_ARRAYByLanguage on array BookDesc_L10N_ARRAY
     */
    public entity.RateBook_BookDesc_L10N getBookDesc_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.RateBook_BookDesc_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the BookEdition field.
     * The edition of the rate book. This, combined with the 'BookName', identifies the rate book to the user.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBookEdition() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKEDITION_PROP.get());
    }
    
    /**
     * Gets the value of the BookGroup field.
     * Tag used for grouping RateBooks; used in RateBook lookup relaxation ordering.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBookGroup() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKGROUP_PROP.get());
    }
    
    /**
     * Gets the value of the BookJurisdiction field.
     * The Jurisdiction this books applies to; countrywide is null
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Jurisdiction getBookJurisdiction() {
      return (typekey.Jurisdiction)__getInternalInterface().getFieldValue(BOOKJURISDICTION_PROP.get());
    }
    
    /**
     * Gets the value of the BookName field.
     * The name of the rate book. This, combined with the 'BookEdition', identifies the rate book to the user.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBookName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKNAME_PROP.get());
    }
    
    /**
     * Gets the value of the BookName_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateBook_BookName_L10N[] getBookName_L10N_ARRAY() {
      return (entity.RateBook_BookName_L10N[])__getInternalInterface().getFieldValue(BOOKNAME_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition BookName_L10N_ARRAYByLanguage on array BookName_L10N_ARRAY
     */
    public entity.RateBook_BookName_L10N getBookName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.RateBook_BookName_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the BookOffering field.
     * The offering this books applies to
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBookOffering() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BOOKOFFERING_PROP.get());
    }
    
    public java.util.Map<java.lang.String, entity.RateTable> getCachedTableMap() {
      return ((com.guidewire.pc.domain.rating.impl.RateBookInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.impl.RateBookInternalMethods")).getCachedTableMap();
    }
    
    public entity.CalcRoutineDefinition getCalcRoutineFromActiveRateBook(java.lang.String code) {
      return ((com.guidewire.pc.domain.rating.RateBookPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateBookPublicMethods")).getCalcRoutineFromActiveRateBook(code);
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
     * Gets the value of the EffectiveDate field.
     * The earliest policy effective date that can be rated using this rate book
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ExpirationDate field.
     * The latest policy effective date that can be rated using this rate book
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpirationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EXPIRATIONDATE_PROP.get());
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
     * Gets the value of the LastStatusChangeDate field.
     * The (calendar) date of the last Status change
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLastStatusChangeDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LASTSTATUSCHANGEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the LastTableRowEdit field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLastTableRowEdit() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LASTTABLEROWEDIT_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyLine field.
     * Code of the Policy Line that the rate table belongs to
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyLine() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYLINE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RateBookCalcRoutines field.
     * Which rate routines are used in this rate book
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateBookCalcRoutine[] getRateBookCalcRoutines() {
      return (entity.RateBookCalcRoutine[])__getInternalInterface().getFieldValue(RATEBOOKCALCROUTINES_PROP.get());
    }
    
    /**
     * Gets the value of the RateBookExportResults field.
     * List of rate book export results
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateBookExportResult[] getRateBookExportResults() {
      return (entity.RateBookExportResult[])__getInternalInterface().getFieldValue(RATEBOOKEXPORTRESULTS_PROP.get());
    }
    
    public java.util.List<entity.RateBook> getRateBookHierarchy() {
      return ((com.guidewire.pc.domain.rating.RateBookPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateBookPublicMethods")).getRateBookHierarchy();
    }
    
    /**
     * Gets the value of the RateTables field.
     * Which logical rate tables are in this rate book
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTable[] getRateTables() {
      return (entity.RateTable[])__getInternalInterface().getFieldValue(RATETABLES_PROP.get());
    }
    
    /**
     * Gets the value of the Ratebooks field.
     * Array of test cases to which this ratebook belongs.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ImpactTestingRateBook[] getRatebooks() {
      return (entity.ImpactTestingRateBook[])__getInternalInterface().getFieldValue(RATEBOOKS_PROP.get());
    }
    
    /**
     * Gets the value of the RenewalEffectiveDate field.
     * The earliest policy renewal effective date that can be rated using this rate book
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getRenewalEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(RENEWALEFFECTIVEDATE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the Status field.
     * The status determines things such as whether the rate book may be changed or be brought back into an editable state, whether it has been approved for production, and whether it has been put into production.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RateBookStatus getStatus() {
      return (typekey.RateBookStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    public entity.RateTable getTable(java.lang.String code) {
      return ((com.guidewire.pc.domain.rating.RateBookPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateBookPublicMethods")).getTable(code);
    }
    
    /**
     * Gets the value of the UWCompany field.
     * The Underwriting company that insures policies that are rated using this book.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.UWCompany getUWCompany() {
      return (entity.UWCompany)__getInternalInterface().getFieldValue(UWCOMPANY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUWCompanyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UWCOMPANY_PROP.get());
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
     * Gets the value of the CascadedLookup field.
     * If it is true we continue to look past this ratebook for rateTables and rateRoutines
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCascadedLookup() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CASCADEDLOOKUP_PROP.get());
    }
    
    /**
     * Gets the value of the ExportLock field.
     * Indicates that this ratebook is being exported, so it's locked to prevent edits
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isExportLock() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(EXPORTLOCK_PROP.get());
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
    
    /**
     * Removes the given element from the BookDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromBookDesc_L10N_ARRAY(entity.RateBook_BookDesc_L10N element) {
      __getInternalInterface().removeArrayElement(BOOKDESC_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BookDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBookDesc_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BOOKDESC_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the BookName_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromBookName_L10N_ARRAY(entity.RateBook_BookName_L10N element) {
      __getInternalInterface().removeArrayElement(BOOKNAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the BookName_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromBookName_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(BOOKNAME_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RateBookCalcRoutines array. This is achieved by marking the element for removal.
     */
    public void removeFromRateBookCalcRoutines(entity.RateBookCalcRoutine element) {
      __getInternalInterface().removeArrayElement(RATEBOOKCALCROUTINES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RateBookCalcRoutines array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRateBookCalcRoutines(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RATEBOOKCALCROUTINES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RateBookExportResults array. This is achieved by marking the element for removal.
     */
    public void removeFromRateBookExportResults(entity.RateBookExportResult element) {
      __getInternalInterface().removeArrayElement(RATEBOOKEXPORTRESULTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RateBookExportResults array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRateBookExportResults(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RATEBOOKEXPORTRESULTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RateTables array. This is achieved by marking the element for removal.
     */
    public void removeFromRateTables(entity.RateTable element) {
      __getInternalInterface().removeArrayElement(RATETABLES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RateTables array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRateTables(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RATETABLES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Ratebooks array. This is achieved by marking the element for removal.
     */
    public void removeFromRatebooks(entity.ImpactTestingRateBook element) {
      __getInternalInterface().removeArrayElement(RATEBOOKS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Ratebooks array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRatebooks(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RATEBOOKS_PROP.get(), elementID);
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
     * Sets the value of the BookCode field.
     */
    public void setBookCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BOOKCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BookDesc field.
     */
    public void setBookDesc(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BOOKDESC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BookDesc_L10N_ARRAY field.
     */
    public void setBookDesc_L10N_ARRAY(entity.RateBook_BookDesc_L10N[] value) {
      __getInternalInterface().setFieldValue(BOOKDESC_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BookEdition field.
     */
    public void setBookEdition(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BOOKEDITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BookGroup field.
     */
    public void setBookGroup(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BOOKGROUP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BookJurisdiction field.
     */
    public void setBookJurisdiction(typekey.Jurisdiction value) {
      __getInternalInterface().setFieldValue(BOOKJURISDICTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BookName field.
     */
    public void setBookName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BOOKNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BookName_L10N_ARRAY field.
     */
    public void setBookName_L10N_ARRAY(entity.RateBook_BookName_L10N[] value) {
      __getInternalInterface().setFieldValue(BOOKNAME_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BookOffering field.
     */
    public void setBookOffering(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BOOKOFFERING_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CascadedLookup field.
     */
    public void setCascadedLookup(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CASCADEDLOOKUP_PROP.get(), value);
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
     * Sets the value of the EffectiveDate field.
     */
    public void setEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EFFECTIVEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExpirationDate field.
     */
    public void setExpirationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExportLock field.
     */
    public void setExportLock(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(EXPORTLOCK_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastStatusChangeDate field.
     */
    public void setLastStatusChangeDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(LASTSTATUSCHANGEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastTableRowEdit field.
     */
    public void setLastTableRowEdit(java.util.Date value) {
      __getInternalInterface().setFieldValue(LASTTABLEROWEDIT_PROP.get(), value);
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
     * Sets the value of the PolicyLine field.
     */
    public void setPolicyLine(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYLINE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RateBookCalcRoutines field.
     */
    public void setRateBookCalcRoutines(entity.RateBookCalcRoutine[] value) {
      __getInternalInterface().setFieldValue(RATEBOOKCALCROUTINES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RateBookExportResults field.
     */
    public void setRateBookExportResults(entity.RateBookExportResult[] value) {
      __getInternalInterface().setFieldValue(RATEBOOKEXPORTRESULTS_PROP.get(), value);
    }
    
    public void setRateBookHierarchy(java.util.List<entity.RateBook> rateBookHierarchy) {
      ((com.guidewire.pc.domain.rating.RateBookPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateBookPublicMethods")).setRateBookHierarchy(rateBookHierarchy);
    }
    
    /**
     * Sets the value of the RateTables field.
     */
    public void setRateTables(entity.RateTable[] value) {
      __getInternalInterface().setFieldValue(RATETABLES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Ratebooks field.
     */
    public void setRatebooks(entity.ImpactTestingRateBook[] value) {
      __getInternalInterface().setFieldValue(RATEBOOKS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RenewalEffectiveDate field.
     */
    public void setRenewalEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(RENEWALEFFECTIVEDATE_PROP.get(), value);
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
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.RateBookStatus value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UWCompany field.
     */
    public void setUWCompany(entity.UWCompany value) {
      __getInternalInterface().setFieldValue(UWCOMPANY_PROP.get(), value);
    }
    
    public void setUWCompanyID(gw.pl.persistence.core.Key value) {
      setFieldValue(UWCOMPANY_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.rating.RateBookPublicMethods", "com.guidewire.pc.domain.rating.impl.RateBookImpl");
    config.put("com.guidewire.pc.domain.rating.impl.RateBookInternalMethods", "com.guidewire.pc.domain.rating.impl.RateBookImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.rating.impl.RateBookImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RateBook.class, config);
    com.guidewire._generated.entity.RateBookInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RateBook, com.guidewire._generated.entity.RateBookInternal>() {
      public java.lang.Object getImplementation(entity.RateBook bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RateBookInternal getInternalInterface(entity.RateBook bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RateBook newEmptyInstance() {
        return new entity.RateBook((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}