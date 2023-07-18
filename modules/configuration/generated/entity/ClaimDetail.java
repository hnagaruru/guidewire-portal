package entity;

/**
 * ClaimDetail
 * Claim Details
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ClaimDetail.eti;ClaimDetail.eix;ClaimDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ClaimDetail")
public class ClaimDetail extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ClaimDetail> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ClaimDetail>("entity.ClaimDetail");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CLAIM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Claim");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLAIMINFOPUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClaimInfoPublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLAIMPUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ClaimPublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INJURIES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Injuries");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LITIGATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Litigation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOSSCAUSE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LossCause");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> RECOVERIES_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "Recoveries");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RECOVERIES_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Recoveries_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RECOVERIES_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Recoveries_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> REMAININGRESERVES_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "RemainingReserves");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REMAININGRESERVES_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RemainingReserves_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> REMAININGRESERVES_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RemainingReserves_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALPAID_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalPaid");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALPAID_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalPaid_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALPAID_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalPaid_cur");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ClaimDetailInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ClaimDetail()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ClaimDetail(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ClaimDetail(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ClaimDetailInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ClaimDetailInternal __getInternalInterface() {
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
   * Gets the value of the Claim field.
   * The claim with which this is associated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Claim getClaim() {
    return (entity.Claim)__getInternalInterface().getFieldValue(CLAIM_PROP.get());
  }
  
  /**
   * Gets the value of the ClaimInfoPublicID field.
   * ClaimInfo Public ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimInfoPublicID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMINFOPUBLICID_PROP.get());
  }
  
  /**
   * Gets the value of the ClaimPublicID field.
   * @deprecated Claim Public ID
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimPublicID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMPUBLICID_PROP.get());
  }
  
  /**
   * Gets the value of the Description field.
   * Additional Description of the claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LossCause field.
   * Cause of loss
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLossCause() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOSSCAUSE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the Recoveries field.
   * Sum of all submitted recoveries on claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getRecoveries() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(RECOVERIES_PROP.get());
  }
  
  /**
   * Gets the value of the Recoveries_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRecoveries_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(RECOVERIES_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the Recoveries_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getRecoveries_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(RECOVERIES_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the RemainingReserves field.
   * Sum of all submitted and awaiting submission reserves - all approved eroding payments
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getRemainingReserves() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(REMAININGRESERVES_PROP.get());
  }
  
  /**
   * Gets the value of the RemainingReserves_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRemainingReserves_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(REMAININGRESERVES_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the RemainingReserves_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getRemainingReserves_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(REMAININGRESERVES_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPaid field.
   * Sum of all submitted and awiting submission payments whose scheduled send date is today or earlier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPaid() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALPAID_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPaid_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPaid_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALPAID_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPaid_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPaid_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALPAID_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the Injuries field.
   * Are there any injury incidents associated to the claim?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInjuries() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INJURIES_PROP.get());
  }
  
  /**
   * Gets the value of the Litigation field.
   * Are there matters associated to the claim?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLitigation() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(LITIGATION_PROP.get());
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
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Claim field.
   */
  public void setClaim(entity.Claim value) {
    __getInternalInterface().setFieldValue(CLAIM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimInfoPublicID field.
   */
  public void setClaimInfoPublicID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLAIMINFOPUBLICID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ClaimPublicID field.
   * @deprecated Claim Public ID
   */
  @java.lang.Deprecated
  public void setClaimPublicID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLAIMPUBLICID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Injuries field.
   */
  public void setInjuries(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INJURIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Litigation field.
   */
  public void setLitigation(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(LITIGATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossCause field.
   */
  public void setLossCause(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LOSSCAUSE_PROP.get(), value);
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
   * Sets the value of the Recoveries field.
   */
  public void setRecoveries(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(RECOVERIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Recoveries_amt field.
   */
  private void setRecoveries_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(RECOVERIES_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Recoveries_cur field.
   */
  private void setRecoveries_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(RECOVERIES_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RemainingReserves field.
   */
  public void setRemainingReserves(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(REMAININGRESERVES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RemainingReserves_amt field.
   */
  private void setRemainingReserves_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(REMAININGRESERVES_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RemainingReserves_cur field.
   */
  private void setRemainingReserves_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(REMAININGRESERVES_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPaid field.
   */
  public void setTotalPaid(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALPAID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPaid_amt field.
   */
  private void setTotalPaid_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALPAID_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPaid_cur field.
   */
  private void setTotalPaid_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALPAID_CUR_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ClaimDetailInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ClaimDetail.this.__getDelegateManager();
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
     * Gets the value of the Claim field.
     * The claim with which this is associated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Claim getClaim() {
      return (entity.Claim)__getInternalInterface().getFieldValue(CLAIM_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getClaimID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CLAIM_PROP.get());
    }
    
    /**
     * Gets the value of the ClaimInfoPublicID field.
     * ClaimInfo Public ID
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClaimInfoPublicID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMINFOPUBLICID_PROP.get());
    }
    
    /**
     * Gets the value of the ClaimPublicID field.
     * @deprecated Claim Public ID
     */
    @java.lang.Deprecated
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getClaimPublicID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLAIMPUBLICID_PROP.get());
    }
    
    /**
     * Gets the value of the Description field.
     * Additional Description of the claim
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
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
     * Gets the value of the LossCause field.
     * Cause of loss
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLossCause() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LOSSCAUSE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the Recoveries field.
     * Sum of all submitted recoveries on claim
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getRecoveries() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(RECOVERIES_PROP.get());
    }
    
    /**
     * Gets the value of the Recoveries_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getRecoveries_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(RECOVERIES_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the Recoveries_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getRecoveries_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(RECOVERIES_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the RemainingReserves field.
     * Sum of all submitted and awaiting submission reserves - all approved eroding payments
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getRemainingReserves() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(REMAININGRESERVES_PROP.get());
    }
    
    /**
     * Gets the value of the RemainingReserves_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getRemainingReserves_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(REMAININGRESERVES_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the RemainingReserves_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getRemainingReserves_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(REMAININGRESERVES_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPaid field.
     * Sum of all submitted and awiting submission payments whose scheduled send date is today or earlier
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalPaid() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALPAID_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPaid_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalPaid_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALPAID_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPaid_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalPaid_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALPAID_CUR_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the Injuries field.
     * Are there any injury incidents associated to the claim?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isInjuries() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INJURIES_PROP.get());
    }
    
    /**
     * Gets the value of the Litigation field.
     * Are there matters associated to the claim?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isLitigation() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(LITIGATION_PROP.get());
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
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Claim field.
     */
    public void setClaim(entity.Claim value) {
      __getInternalInterface().setFieldValue(CLAIM_PROP.get(), value);
    }
    
    public void setClaimID(gw.pl.persistence.core.Key value) {
      setFieldValue(CLAIM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimInfoPublicID field.
     */
    public void setClaimInfoPublicID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLAIMINFOPUBLICID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ClaimPublicID field.
     * @deprecated Claim Public ID
     */
    @java.lang.Deprecated
    public void setClaimPublicID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLAIMPUBLICID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Injuries field.
     */
    public void setInjuries(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INJURIES_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Litigation field.
     */
    public void setLitigation(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(LITIGATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossCause field.
     */
    public void setLossCause(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LOSSCAUSE_PROP.get(), value);
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
     * Sets the value of the Recoveries field.
     */
    public void setRecoveries(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(RECOVERIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Recoveries_amt field.
     */
    public void setRecoveries_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(RECOVERIES_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Recoveries_cur field.
     */
    public void setRecoveries_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(RECOVERIES_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RemainingReserves field.
     */
    public void setRemainingReserves(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(REMAININGRESERVES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RemainingReserves_amt field.
     */
    public void setRemainingReserves_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(REMAININGRESERVES_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RemainingReserves_cur field.
     */
    public void setRemainingReserves_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(REMAININGRESERVES_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPaid field.
     */
    public void setTotalPaid(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALPAID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPaid_amt field.
     */
    public void setTotalPaid_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALPAID_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPaid_cur field.
     */
    public void setTotalPaid_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALPAID_CUR_PROP.get(), value);
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ClaimDetail.class, config);
    com.guidewire._generated.entity.ClaimDetailInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ClaimDetail, com.guidewire._generated.entity.ClaimDetailInternal>() {
      public java.lang.Object getImplementation(entity.ClaimDetail bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ClaimDetailInternal getInternalInterface(entity.ClaimDetail bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ClaimDetail newEmptyInstance() {
        return new entity.ClaimDetail((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}