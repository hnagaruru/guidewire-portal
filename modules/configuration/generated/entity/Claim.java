package entity;

/**
 * Claim
 * Claim
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Claim.eti;Claim.eix;Claim.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "Claim")
public class Claim extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Claim> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Claim>("entity.Claim");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADJUSTERDISPLAYNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AdjusterDisplayName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADJUSTERPHONENUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AdjusterPhoneNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLAIMNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClaimNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLAIMPUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClaimPublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLAIMSECURITYTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClaimSecurityType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CLAIMSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ClaimSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FRAUDINDICATOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FraudIndicator");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LARGELOSSINDICATOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LargeLossIndicator");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LITIGATIONINDICATOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LitigationIndicator");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOSSDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LossDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOSSTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LossType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYINFORCE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyInForce");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYPERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYTYPE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Status");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALINCURRED_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalIncurred");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALINCURRED_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalIncurred_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALINCURRED_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalIncurred_cur");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ClaimInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public Claim()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public Claim(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected Claim(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ClaimInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ClaimInternal __getInternalInterface() {
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
   * Gets the value of the AdjusterDisplayName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdjusterDisplayName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADJUSTERDISPLAYNAME_PROP.get());
  }
  
  /**
   * Gets the value of the AdjusterPhoneNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdjusterPhoneNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADJUSTERPHONENUMBER_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the ClaimNumber field.
   * Claim number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the ClaimPublicID field.
   * Claim Public ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimPublicID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMPUBLICID_PROP.get());
  }
  
  /**
   * Gets the value of the ClaimSecurityType field.
   * Claim security type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimSecurityType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMSECURITYTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the ClaimSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ClaimSet getClaimSet() {
    return (entity.ClaimSet)__getInternalInterface().getFieldValue(CLAIMSET_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LossDate field.
   * Loss date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLossDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LOSSDATE_PROP.get());
  }
  
  /**
   * Gets the value of the LossType field.
   * Loss type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLossType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOSSTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Associated Policy Period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyType field.
   * Policy type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyType() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYTYPE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the Status field.
   * Status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStatus() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATUS_PROP.get());
  }
  
  /**
   * Gets the value of the TotalIncurred field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalIncurred() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALINCURRED_PROP.get());
  }
  
  /**
   * Gets the value of the TotalIncurred_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalIncurred_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALINCURRED_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalIncurred_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalIncurred_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALINCURRED_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the FraudIndicator field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFraudIndicator() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FRAUDINDICATOR_PROP.get());
  }
  
  /**
   * Gets the value of the LargeLossIndicator field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLargeLossIndicator() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LARGELOSSINDICATOR_PROP.get());
  }
  
  /**
   * Gets the value of the LitigationIndicator field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLitigationIndicator() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LITIGATIONINDICATOR_PROP.get());
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
   * Gets the value of the PolicyInForce field.
   * Policy In Force
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPolicyInForce() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(POLICYINFORCE_PROP.get());
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
   * Sets the value of the AdjusterDisplayName field.
   */
  public void setAdjusterDisplayName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADJUSTERDISPLAYNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AdjusterPhoneNumber field.
   */
  public void setAdjusterPhoneNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADJUSTERPHONENUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimNumber field.
   */
  public void setClaimNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLAIMNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimPublicID field.
   */
  public void setClaimPublicID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLAIMPUBLICID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimSecurityType field.
   */
  public void setClaimSecurityType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLAIMSECURITYTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimSet field.
   */
  public void setClaimSet(entity.ClaimSet value) {
    __getInternalInterface().setFieldValue(CLAIMSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FraudIndicator field.
   */
  public void setFraudIndicator(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(FRAUDINDICATOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LargeLossIndicator field.
   */
  public void setLargeLossIndicator(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LARGELOSSINDICATOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LitigationIndicator field.
   */
  public void setLitigationIndicator(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LITIGATIONINDICATOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossDate field.
   */
  public void setLossDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(LOSSDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossType field.
   */
  public void setLossType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LOSSTYPE_PROP.get(), value);
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
   * Sets the value of the PolicyInForce field.
   */
  public void setPolicyInForce(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(POLICYINFORCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyType field.
   */
  public void setPolicyType(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYTYPE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalIncurred field.
   */
  public void setTotalIncurred(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALINCURRED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalIncurred_amt field.
   */
  private void setTotalIncurred_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALINCURRED_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalIncurred_cur field.
   */
  private void setTotalIncurred_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALINCURRED_CUR_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ClaimInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.Claim.this.__getDelegateManager();
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
     * Gets the value of the AdjusterDisplayName field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAdjusterDisplayName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADJUSTERDISPLAYNAME_PROP.get());
    }
    
    /**
     * Gets the value of the AdjusterPhoneNumber field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAdjusterPhoneNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADJUSTERPHONENUMBER_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the ClaimNumber field.
     * Claim number
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClaimNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the ClaimPublicID field.
     * Claim Public ID
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClaimPublicID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMPUBLICID_PROP.get());
    }
    
    /**
     * Gets the value of the ClaimSecurityType field.
     * Claim security type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClaimSecurityType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMSECURITYTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the ClaimSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ClaimSet getClaimSet() {
      return (entity.ClaimSet)__getInternalInterface().getFieldValue(CLAIMSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getClaimSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CLAIMSET_PROP.get());
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
     * Gets the value of the LossDate field.
     * Loss date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLossDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LOSSDATE_PROP.get());
    }
    
    /**
     * Gets the value of the LossType field.
     * Loss type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLossType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOSSTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyPeriod field.
     * Associated Policy Period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getPolicyPeriod() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyPeriodID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYPERIOD_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyType field.
     * Policy type
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyType() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYTYPE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the Status field.
     * Status
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getStatus() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STATUS_PROP.get());
    }
    
    /**
     * Gets the value of the TotalIncurred field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalIncurred() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALINCURRED_PROP.get());
    }
    
    /**
     * Gets the value of the TotalIncurred_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalIncurred_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALINCURRED_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalIncurred_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalIncurred_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALINCURRED_CUR_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the FraudIndicator field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isFraudIndicator() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(FRAUDINDICATOR_PROP.get());
    }
    
    /**
     * Gets the value of the LargeLossIndicator field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLargeLossIndicator() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LARGELOSSINDICATOR_PROP.get());
    }
    
    /**
     * Gets the value of the LitigationIndicator field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLitigationIndicator() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LITIGATIONINDICATOR_PROP.get());
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
     * Gets the value of the PolicyInForce field.
     * Policy In Force
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isPolicyInForce() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(POLICYINFORCE_PROP.get());
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
     * Sets the value of the AdjusterDisplayName field.
     */
    public void setAdjusterDisplayName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADJUSTERDISPLAYNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AdjusterPhoneNumber field.
     */
    public void setAdjusterPhoneNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADJUSTERPHONENUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimNumber field.
     */
    public void setClaimNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLAIMNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimPublicID field.
     */
    public void setClaimPublicID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLAIMPUBLICID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimSecurityType field.
     */
    public void setClaimSecurityType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLAIMSECURITYTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimSet field.
     */
    public void setClaimSet(entity.ClaimSet value) {
      __getInternalInterface().setFieldValue(CLAIMSET_PROP.get(), value);
    }
    
    public void setClaimSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(CLAIMSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FraudIndicator field.
     */
    public void setFraudIndicator(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(FRAUDINDICATOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LargeLossIndicator field.
     */
    public void setLargeLossIndicator(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LARGELOSSINDICATOR_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LitigationIndicator field.
     */
    public void setLitigationIndicator(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LITIGATIONINDICATOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossDate field.
     */
    public void setLossDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(LOSSDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossType field.
     */
    public void setLossType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LOSSTYPE_PROP.get(), value);
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
     * Sets the value of the PolicyInForce field.
     */
    public void setPolicyInForce(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(POLICYINFORCE_PROP.get(), value);
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
     * Sets the value of the PolicyType field.
     */
    public void setPolicyType(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYTYPE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the Status field.
     */
    public void setStatus(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalIncurred field.
     */
    public void setTotalIncurred(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALINCURRED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalIncurred_amt field.
     */
    public void setTotalIncurred_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALINCURRED_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalIncurred_cur field.
     */
    public void setTotalIncurred_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALINCURRED_CUR_PROP.get(), value);
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
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.Claim.class, config);
    com.guidewire._generated.entity.ClaimInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.Claim, com.guidewire._generated.entity.ClaimInternal>() {
      public java.lang.Object getImplementation(entity.Claim bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ClaimInternal getInternalInterface(entity.Claim bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.Claim newEmptyInstance() {
        return new entity.Claim((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}