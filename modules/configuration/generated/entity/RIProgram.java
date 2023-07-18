package entity;

/**
 * RIProgram
 * A reinsurance program (a collection of agreements that together cover a risk).
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RIProgram.eti;RIProgram.eix;RIProgram.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RIProgram")
public class RIProgram extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.RIContract, entity.EventAware, gw.api.domain.reinsurance.RICoverageGroupOwner, gw.api.reinsurance.Cedeable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RIProgram> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RIProgram>("entity.RIProgram");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDINGRECALCEXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CedingRecalcExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Currency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NAME_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Name_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PROGRAMTREATIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ProgramTreaties");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RICOVERAGEGROUPS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RICoverageGroups");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REQUIRESRECALCULATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RequiresRecalculation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RESPONSIBLEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ResponsibleUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> SINGLERISKMAXIMUM_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "SingleRiskMaximum");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SINGLERISKMAXIMUM_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SingleRiskMaximum_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SINGLERISKMAXIMUM_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SingleRiskMaximum_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TARGETMAXRETENTION_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TargetMaxRetention");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TARGETMAXRETENTION_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TargetMaxRetention_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TARGETMAXRETENTION_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TargetMaxRetention_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RIProgramInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  public static final java.lang.String RIPROGRAMADDED_EVENT = "RIProgramAdded";
  
  public static final java.lang.String RIPROGRAMCHANGED_EVENT = "RIProgramChanged";
  
  public static final java.lang.String RIPROGRAMREMOVED_EVENT = "RIProgramRemoved";
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RIProgram()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RIProgram(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RIProgram(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RIProgramInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RIProgramInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Add a coverage group to this entity.
   * @param groupType coverage group for reinsurance
   */
  public typekey.RICoverageGroupType addCoverageGroup(typekey.RICoverageGroupType groupType) {
    return ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).addCoverageGroup(groupType);
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
   * Associate a treaty to this program.
   * @param treaty the treaty to add
   */
  public void addTreaty(entity.Treaty treaty) {
    ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).addTreaty(treaty);
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
   * Gets the value of the CedingRecalcExpirationDate field.
   * Expiration date may change; this field holds the maximum Expiration Date since the prior ceding calculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCedingRecalcExpirationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CEDINGRECALCEXPIRATIONDATE_PROP.get());
  }
  
  /**
   * Return all coverage groups this entity applies to.
   * @return list of coverage groups associated with owner
   */
  public java.util.List<typekey.RICoverageGroupType> getCoverageGroups() {
    return ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).getCoverageGroups();
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
   * Gets the value of the Currency field.
   * Currency associated with the RI contract
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(CURRENCY_PROP.get());
  }
  
  /**
   * Gets the value of the EffectiveDate field.
   * Effective date of this row.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ExpirationDate field.
   * Expiration date of this row or NULL in the database if this row never expires.
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
   * Returns the list of loss date attachment treaties.
   * @return list of reinsurance agreements.
   */
  public java.util.List<entity.RIAgreement> getLossDateAttachmentTreaties() {
    return ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).getLossDateAttachmentTreaties();
  }
  
  /**
   * Gets the value of the Name field.
   * The name of this contract.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram_Name_L10N[] getName_L10N_ARRAY() {
    return (entity.RIProgram_Name_L10N[])__getInternalInterface().getFieldValue(NAME_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array Name_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Name_en_US"));
  }
  
  /**
   * Returns the list of policy attachment treaties.
   * @return list of reinsurance agreements.
   */
  public java.util.List<entity.RIAgreement> getPolicyAttachmentTreaties() {
    return ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).getPolicyAttachmentTreaties();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProgramTreaty[] getProgramTreaties() {
    return (entity.ProgramTreaty[])__getInternalInterface().getFieldValue(PROGRAMTREATIES_PROP.get());
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
  public entity.ProgramCoverageGroup[] getRICoverageGroups() {
    return (entity.ProgramCoverageGroup[])__getInternalInterface().getFieldValue(RICOVERAGEGROUPS_PROP.get());
  }
  
  /**
   * Look up Reinsurable associated with a this risk.
   * @return the reinsurable associated with this risk.
   */
  public entity.Reinsurable getReinsurable() {
    return ((gw.api.reinsurance.Cedeable)__getDelegateManager().getImplementation("gw.api.reinsurance.Cedeable")).getReinsurable();
  }
  
  /**
   * Gets the value of the ResponsibleUser field.
   * The last user to update the program
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getResponsibleUser() {
    return (entity.User)__getInternalInterface().getFieldValue(RESPONSIBLEUSER_PROP.get());
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
   * Gets the value of the SingleRiskMaximum field.
   * A value that the user can set to show their intended max number. This may also be used by rules to decide whether a risk falls within the max allowed by the program.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getSingleRiskMaximum() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(SINGLERISKMAXIMUM_PROP.get());
  }
  
  /**
   * Gets the value of the SingleRiskMaximum_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getSingleRiskMaximum_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(SINGLERISKMAXIMUM_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the SingleRiskMaximum_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getSingleRiskMaximum_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(SINGLERISKMAXIMUM_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the Status field.
   * Status of the contract
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContractStatus getStatus() {
    return (typekey.ContractStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
  }
  
  /**
   * Gets the value of the TargetMaxRetention field.
   * The net amount of risk which the ceding company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTargetMaxRetention() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TARGETMAXRETENTION_PROP.get());
  }
  
  /**
   * Gets the value of the TargetMaxRetention_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTargetMaxRetention_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TARGETMAXRETENTION_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TargetMaxRetention_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTargetMaxRetention_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TARGETMAXRETENTION_CUR_PROP.get());
  }
  
  /**
   * Get all treaties associated with this program.
   * @return a array of treaties
   */
  public entity.RIAgreement[] getTreaties() {
    return ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).getTreaties();
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
   * Returns true if the program has status active.
   * @return boolean value
   */
  public boolean isActive() {
    return ((com.guidewire.pc.domain.reinsurance.RIContractPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIContractPublicMethods")).isActive();
  }
  
  /**
   * Returns true if this is effective for the given period.
   * @param start start of the period
   * @param end end of the period
   * @return true if effective window overlaps given dates, false otherwise
   */
  public boolean isEffective(java.util.Date start, java.util.Date end) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffective(start, end);
  }
  
  /**
   * Returns true if this is effective at the given date.
   * @param date the date to check
   * @return true if this is effective at given date, false otherwise
   */
  public boolean isEffectiveAt(java.util.Date date) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffectiveAt(date);
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
   * Returns true if the effective window of this overlaps with the effective window of other.
   * @param other the other eff dated
   * @return true if the effective windows of this and other overlap, false otherwise.
   */
  public boolean isOverlap(entity.SimpleEffDated other) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isOverlap(other);
  }
  
  /**
   * Gets the value of the RequiresRecalculation field.
   * Indicates if this Program has been modified and requires a recalculation of any related Ceded Premiums
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRequiresRecalculation() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(REQUIRESRECALCULATION_PROP.get());
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
   * Remove a coverage group from this entity
   * @param groupType coverage group for reinsurance
   */
  public void removeCoverageGroup(typekey.RICoverageGroupType groupType) {
    ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).removeCoverageGroup(groupType);
  }
  
  /**
   * Un-associate a treaty with this program.
   * @param treaty the treaty to remove
   */
  public void removeTreaty(entity.RIAgreement treaty) {
    ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).removeTreaty(treaty);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CedingRecalcExpirationDate field.
   */
  private void setCedingRecalcExpirationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CEDINGRECALCEXPIRATIONDATE_PROP.get(), value);
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
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(CURRENCY_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setEffectiveDate(java.util.Date effectiveDate) {
    ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).setEffectiveDate(effectiveDate);
  }
  
  /**
   * Set the effective date of the program.   The time of day will be normalized.
   * @param effectiveDate Effective date for this program.
   */
  public void setEffectiveDateWithDefaultTime(java.util.Date effectiveDate) {
    ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).setEffectiveDateWithDefaultTime(effectiveDate);
  }
  
  /**
   * Sets the value of the ExpirationDate field.
   */
  public void setExpirationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
  }
  
  /**
   * Set the effective date of the program.   The time of day will be normalized.
   * @param expirationDate Expiration date for this program.
   */
  public void setExpirationDateWithDefaultTime(java.util.Date expirationDate) {
    ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).setExpirationDateWithDefaultTime(expirationDate);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name_L10N_ARRAY field.
   */
  private void setName_L10N_ARRAY(entity.RIProgram_Name_L10N[] value) {
    __getInternalInterface().setFieldValue(NAME_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key Name_ on array Name_L10N_ARRAY
   */
  public void setName_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("Name_en_US"), value);
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
   * Sets the value of the ProgramTreaties field.
   */
  private void setProgramTreaties(entity.ProgramTreaty[] value) {
    __getInternalInterface().setFieldValue(PROGRAMTREATIES_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RICoverageGroups field.
   */
  private void setRICoverageGroups(entity.ProgramCoverageGroup[] value) {
    __getInternalInterface().setFieldValue(RICOVERAGEGROUPS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RequiresRecalculation field.
   */
  public void setRequiresRecalculation(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(REQUIRESRECALCULATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ResponsibleUser field.
   */
  public void setResponsibleUser(entity.User value) {
    __getInternalInterface().setFieldValue(RESPONSIBLEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SingleRiskMaximum field.
   */
  public void setSingleRiskMaximum(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(SINGLERISKMAXIMUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SingleRiskMaximum_amt field.
   */
  private void setSingleRiskMaximum_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(SINGLERISKMAXIMUM_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SingleRiskMaximum_cur field.
   */
  private void setSingleRiskMaximum_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(SINGLERISKMAXIMUM_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ContractStatus value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TargetMaxRetention field.
   */
  public void setTargetMaxRetention(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TARGETMAXRETENTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TargetMaxRetention_amt field.
   */
  private void setTargetMaxRetention_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TARGETMAXRETENTION_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TargetMaxRetention_cur field.
   */
  private void setTargetMaxRetention_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TARGETMAXRETENTION_CUR_PROP.get(), value);
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
  
  public java.util.List<gw.api.reinsurance.RIAttachment> updateCeding(java.util.List<gw.api.reinsurance.RIAttachment> attachments) {
    return ((gw.api.reinsurance.Cedeable)__getDelegateManager().getImplementation("gw.api.reinsurance.Cedeable")).updateCeding(attachments);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RIProgramInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RIProgram.this.__getDelegateManager();
    }
    
    /**
     * Add a coverage group to this entity.
     * @param groupType coverage group for reinsurance
     */
    public typekey.RICoverageGroupType addCoverageGroup(typekey.RICoverageGroupType groupType) {
      return ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).addCoverageGroup(groupType);
    }
    
    public void addEvent(com.guidewire.pl.system.entity.BeanEvent event) {
      ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).addEvent(event);
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
     * Adds the given element to the Name_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToName_L10N_ARRAY(entity.RIProgram_Name_L10N element) {
      __getInternalInterface().addArrayElement(NAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ProgramTreaties array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToProgramTreaties(entity.ProgramTreaty element) {
      __getInternalInterface().addArrayElement(PROGRAMTREATIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RICoverageGroups array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRICoverageGroups(entity.ProgramCoverageGroup element) {
      __getInternalInterface().addArrayElement(RICOVERAGEGROUPS_PROP.get(), element);
    }
    
    /**
     * Associate a treaty to this program.
     * @param treaty the treaty to add
     */
    public void addTreaty(entity.Treaty treaty) {
      ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).addTreaty(treaty);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void beforeInsert() {
      ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
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
    
    public boolean containsTreaty(entity.RIAgreement treaty) {
      return ((com.guidewire.pc.domain.reinsurance.impl.RIProgramInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.impl.RIProgramInternalMethods")).containsTreaty(treaty);
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
    
    public java.util.List generateInsertEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateInsertEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List generateRemoveEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateRemoveEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List generateUpdateEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateUpdateEvents();
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
     * Gets the value of the CedingRecalcExpirationDate field.
     * Expiration date may change; this field holds the maximum Expiration Date since the prior ceding calculation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCedingRecalcExpirationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CEDINGRECALCEXPIRATIONDATE_PROP.get());
    }
    
    /**
     * Return all coverage groups this entity applies to.
     * @return list of coverage groups associated with owner
     */
    public java.util.List<typekey.RICoverageGroupType> getCoverageGroups() {
      return ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).getCoverageGroups();
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
     * Gets the value of the Currency field.
     * Currency associated with the RI contract
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCurrency() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CURRENCY_PROP.get());
    }
    
    /**
     * Gets the value of the EffectiveDate field.
     * Effective date of this row.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * Gets the value of the ExpirationDate field.
     * Expiration date of this row or NULL in the database if this row never expires.
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
     * Returns the list of loss date attachment treaties.
     * @return list of reinsurance agreements.
     */
    public java.util.List<entity.RIAgreement> getLossDateAttachmentTreaties() {
      return ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).getLossDateAttachmentTreaties();
    }
    
    /**
     * Gets the value of the Name field.
     * The name of this contract.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the Name_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIProgram_Name_L10N[] getName_L10N_ARRAY() {
      return (entity.RIProgram_Name_L10N[])__getInternalInterface().getFieldValue(NAME_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition Name_L10N_ARRAYByLanguage on array Name_L10N_ARRAY
     */
    public entity.RIProgram_Name_L10N getName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.RIProgram_Name_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Returns the list of policy attachment treaties.
     * @return list of reinsurance agreements.
     */
    public java.util.List<entity.RIAgreement> getPolicyAttachmentTreaties() {
      return ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).getPolicyAttachmentTreaties();
    }
    
    /**
     * Gets the value of the ProgramTreaties field.
     * All reinsurance agreements included in this program.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProgramTreaty[] getProgramTreaties() {
      return (entity.ProgramTreaty[])__getInternalInterface().getFieldValue(PROGRAMTREATIES_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RICoverageGroups field.
     * All RI coverage groups this agreement applies to.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProgramCoverageGroup[] getRICoverageGroups() {
      return (entity.ProgramCoverageGroup[])__getInternalInterface().getFieldValue(RICOVERAGEGROUPS_PROP.get());
    }
    
    /**
     * Look up Reinsurable associated with a this risk.
     * @return the reinsurable associated with this risk.
     */
    public entity.Reinsurable getReinsurable() {
      return ((gw.api.reinsurance.Cedeable)__getDelegateManager().getImplementation("gw.api.reinsurance.Cedeable")).getReinsurable();
    }
    
    /**
     * Gets the value of the ResponsibleUser field.
     * The last user to update the program
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getResponsibleUser() {
      return (entity.User)__getInternalInterface().getFieldValue(RESPONSIBLEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getResponsibleUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RESPONSIBLEUSER_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the SingleRiskMaximum field.
     * A value that the user can set to show their intended max number. This may also be used by rules to decide whether a risk falls within the max allowed by the program.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getSingleRiskMaximum() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(SINGLERISKMAXIMUM_PROP.get());
    }
    
    /**
     * Gets the value of the SingleRiskMaximum_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getSingleRiskMaximum_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(SINGLERISKMAXIMUM_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the SingleRiskMaximum_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getSingleRiskMaximum_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(SINGLERISKMAXIMUM_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the Status field.
     * Status of the contract
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ContractStatus getStatus() {
      return (typekey.ContractStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    /**
     * Gets the value of the TargetMaxRetention field.
     * The net amount of risk which the ceding company
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTargetMaxRetention() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TARGETMAXRETENTION_PROP.get());
    }
    
    /**
     * Gets the value of the TargetMaxRetention_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTargetMaxRetention_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TARGETMAXRETENTION_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TargetMaxRetention_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTargetMaxRetention_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TARGETMAXRETENTION_CUR_PROP.get());
    }
    
    /**
     * Get all treaties associated with this program.
     * @return a array of treaties
     */
    public entity.RIAgreement[] getTreaties() {
      return ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).getTreaties();
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
     * Returns true if the program has status active.
     * @return boolean value
     */
    public boolean isActive() {
      return ((com.guidewire.pc.domain.reinsurance.RIContractPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIContractPublicMethods")).isActive();
    }
    
    /**
     * Returns true if this is effective for the given period.
     * @param start start of the period
     * @param end end of the period
     * @return true if effective window overlaps given dates, false otherwise
     */
    public boolean isEffective(java.util.Date start, java.util.Date end) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffective(start, end);
    }
    
    /**
     * Returns true if this is effective at the given date.
     * @param date the date to check
     * @return true if this is effective at given date, false otherwise
     */
    public boolean isEffectiveAt(java.util.Date date) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffectiveAt(date);
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
     * Returns true if the effective window of this overlaps with the effective window of other.
     * @param other the other eff dated
     * @return true if the effective windows of this and other overlap, false otherwise.
     */
    public boolean isOverlap(entity.SimpleEffDated other) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isOverlap(other);
    }
    
    /**
     * Gets the value of the RequiresRecalculation field.
     * Indicates if this Program has been modified and requires a recalculation of any related Ceded Premiums
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isRequiresRecalculation() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(REQUIRESRECALCULATION_PROP.get());
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
     * Remove a coverage group from this entity
     * @param groupType coverage group for reinsurance
     */
    public void removeCoverageGroup(typekey.RICoverageGroupType groupType) {
      ((gw.api.domain.reinsurance.RICoverageGroupOwner)__getDelegateManager().getImplementation("gw.api.domain.reinsurance.RICoverageGroupOwner")).removeCoverageGroup(groupType);
    }
    
    /**
     * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromName_L10N_ARRAY(entity.RIProgram_Name_L10N element) {
      __getInternalInterface().removeArrayElement(NAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Name_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromName_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(NAME_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ProgramTreaties array. This is achieved by marking the element for removal.
     */
    public void removeFromProgramTreaties(entity.ProgramTreaty element) {
      __getInternalInterface().removeArrayElement(PROGRAMTREATIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ProgramTreaties array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromProgramTreaties(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PROGRAMTREATIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RICoverageGroups array. This is achieved by marking the element for removal.
     */
    public void removeFromRICoverageGroups(entity.ProgramCoverageGroup element) {
      __getInternalInterface().removeArrayElement(RICOVERAGEGROUPS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RICoverageGroups array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRICoverageGroups(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RICOVERAGEGROUPS_PROP.get(), elementID);
    }
    
    /**
     * Un-associate a treaty with this program.
     * @param treaty the treaty to remove
     */
    public void removeTreaty(entity.RIAgreement treaty) {
      ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).removeTreaty(treaty);
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
     * Sets the value of the CedingRecalcExpirationDate field.
     */
    public void setCedingRecalcExpirationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(CEDINGRECALCEXPIRATIONDATE_PROP.get(), value);
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
     * Sets the value of the Currency field.
     */
    public void setCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CURRENCY_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setEffectiveDate(java.util.Date effectiveDate) {
      ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).setEffectiveDate(effectiveDate);
    }
    
    /**
     * Set the effective date of the program.   The time of day will be normalized.
     * @param effectiveDate Effective date for this program.
     */
    public void setEffectiveDateWithDefaultTime(java.util.Date effectiveDate) {
      ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).setEffectiveDateWithDefaultTime(effectiveDate);
    }
    
    /**
     * Sets the value of the ExpirationDate field.
     */
    public void setExpirationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
    }
    
    /**
     * Set the effective date of the program.   The time of day will be normalized.
     * @param expirationDate Expiration date for this program.
     */
    public void setExpirationDateWithDefaultTime(java.util.Date expirationDate) {
      ((com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods")).setExpirationDateWithDefaultTime(expirationDate);
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
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Name_L10N_ARRAY field.
     */
    public void setName_L10N_ARRAY(entity.RIProgram_Name_L10N[] value) {
      __getInternalInterface().setFieldValue(NAME_L10N_ARRAY_PROP.get(), value);
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
     * Sets the value of the ProgramTreaties field.
     */
    public void setProgramTreaties(entity.ProgramTreaty[] value) {
      __getInternalInterface().setFieldValue(PROGRAMTREATIES_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RICoverageGroups field.
     */
    public void setRICoverageGroups(entity.ProgramCoverageGroup[] value) {
      __getInternalInterface().setFieldValue(RICOVERAGEGROUPS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RequiresRecalculation field.
     */
    public void setRequiresRecalculation(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(REQUIRESRECALCULATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ResponsibleUser field.
     */
    public void setResponsibleUser(entity.User value) {
      __getInternalInterface().setFieldValue(RESPONSIBLEUSER_PROP.get(), value);
    }
    
    public void setResponsibleUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(RESPONSIBLEUSER_PROP.get(), value);
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
     * Sets the value of the SingleRiskMaximum field.
     */
    public void setSingleRiskMaximum(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(SINGLERISKMAXIMUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SingleRiskMaximum_amt field.
     */
    public void setSingleRiskMaximum_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(SINGLERISKMAXIMUM_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SingleRiskMaximum_cur field.
     */
    public void setSingleRiskMaximum_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(SINGLERISKMAXIMUM_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.ContractStatus value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TargetMaxRetention field.
     */
    public void setTargetMaxRetention(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TARGETMAXRETENTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TargetMaxRetention_amt field.
     */
    public void setTargetMaxRetention_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TARGETMAXRETENTION_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TargetMaxRetention_cur field.
     */
    public void setTargetMaxRetention_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TARGETMAXRETENTION_CUR_PROP.get(), value);
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
    
    public java.util.List<gw.api.reinsurance.RIAttachment> updateCeding(java.util.List<gw.api.reinsurance.RIAttachment> attachments) {
      return ((gw.api.reinsurance.Cedeable)__getDelegateManager().getImplementation("gw.api.reinsurance.Cedeable")).updateCeding(attachments);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods", "com.guidewire.pc.domain.product.impl.SimpleEffDatedImpl");
    config.put("com.guidewire.pc.domain.reinsurance.RIContractPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.RIContractImpl");
    config.put("com.guidewire.pc.domain.reinsurance.RIProgramPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.RIProgramImpl");
    config.put("com.guidewire.pc.domain.reinsurance.impl.RIProgramInternalMethods", "com.guidewire.pc.domain.reinsurance.impl.RIProgramImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.pc.domain.reinsurance.impl.RIProgramImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.pc.domain.reinsurance.impl.RIProgramImpl");
    config.put("gw.api.domain.reinsurance.RICoverageGroupOwner", "com.guidewire.pc.domain.reinsurance.impl.RIProgramImpl");
    config.put("gw.api.reinsurance.Cedeable", "gw.reinsurance.risk.RIProgramCedeableAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RIProgram.class, config);
    com.guidewire._generated.entity.RIProgramInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RIProgram, com.guidewire._generated.entity.RIProgramInternal>() {
      public java.lang.Object getImplementation(entity.RIProgram bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RIProgramInternal getInternalInterface(entity.RIProgram bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RIProgram newEmptyInstance() {
        return new entity.RIProgram((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}