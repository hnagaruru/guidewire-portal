package entity;

/**
 * LossFinancials
 * Summary financial loss history for a policy period
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LossFinancials.eti;LossFinancials.eix;LossFinancials.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "LossFinancials")
public class LossFinancials extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.LossFinancials> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.LossFinancials>("entity.LossFinancials");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ASOFDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AsOfDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEGINDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeginDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EndDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OPENEXPENSERESERVES_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "OpenExpenseReserves");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENEXPENSERESERVES_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenExpenseReserves_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OPENEXPENSERESERVES_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OpenExpenseReserves_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OPENLOSSRESERVES_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "OpenLossReserves");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPENLOSSRESERVES_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpenLossReserves_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OPENLOSSRESERVES_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OpenLossReserves_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALPAIDEXPENSE_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalPaidExpense");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALPAIDEXPENSE_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalPaidExpense_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALPAIDEXPENSE_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalPaidExpense_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALPAIDLOSS_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalPaidLoss");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALPAIDLOSS_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalPaidLoss_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALPAIDLOSS_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalPaidLoss_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALRECOVERIES_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalRecoveries");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALRECOVERIES_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalRecoveries_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALRECOVERIES_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalRecoveries_cur");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.LossFinancialsInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public LossFinancials()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public LossFinancials(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected LossFinancials(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.LossFinancialsInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.LossFinancialsInternal __getInternalInterface() {
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
   * Gets the value of the AsOfDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAsOfDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ASOFDATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the BeginDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBeginDate() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BEGINDATE_PROP.get());
  }
  
  /**
   * Gets the value of the EndDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEndDate() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ENDDATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the OpenExpenseReserves field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOpenExpenseReserves() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(OPENEXPENSERESERVES_PROP.get());
  }
  
  /**
   * Gets the value of the OpenExpenseReserves_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOpenExpenseReserves_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OPENEXPENSERESERVES_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the OpenExpenseReserves_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOpenExpenseReserves_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(OPENEXPENSERESERVES_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the OpenLossReserves field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOpenLossReserves() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(OPENLOSSRESERVES_PROP.get());
  }
  
  /**
   * Gets the value of the OpenLossReserves_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOpenLossReserves_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OPENLOSSRESERVES_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the OpenLossReserves_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOpenLossReserves_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(OPENLOSSRESERVES_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the TotalPaidExpense field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPaidExpense() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALPAIDEXPENSE_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPaidExpense_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPaidExpense_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALPAIDEXPENSE_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPaidExpense_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPaidExpense_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALPAIDEXPENSE_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPaidLoss field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPaidLoss() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALPAIDLOSS_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPaidLoss_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPaidLoss_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALPAIDLOSS_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPaidLoss_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPaidLoss_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALPAIDLOSS_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the TotalRecoveries field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalRecoveries() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALRECOVERIES_PROP.get());
  }
  
  /**
   * Gets the value of the TotalRecoveries_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalRecoveries_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALRECOVERIES_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalRecoveries_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalRecoveries_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALRECOVERIES_CUR_PROP.get());
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
   * Sets the value of the AsOfDate field.
   */
  public void setAsOfDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ASOFDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeginDate field.
   */
  public void setBeginDate(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BEGINDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ENDDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
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
   * Sets the value of the OpenExpenseReserves field.
   */
  public void setOpenExpenseReserves(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(OPENEXPENSERESERVES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenExpenseReserves_amt field.
   */
  private void setOpenExpenseReserves_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OPENEXPENSERESERVES_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenExpenseReserves_cur field.
   */
  private void setOpenExpenseReserves_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(OPENEXPENSERESERVES_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenLossReserves field.
   */
  public void setOpenLossReserves(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(OPENLOSSRESERVES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenLossReserves_amt field.
   */
  private void setOpenLossReserves_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OPENLOSSRESERVES_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpenLossReserves_cur field.
   */
  private void setOpenLossReserves_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(OPENLOSSRESERVES_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the TotalPaidExpense field.
   */
  public void setTotalPaidExpense(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALPAIDEXPENSE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPaidExpense_amt field.
   */
  private void setTotalPaidExpense_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALPAIDEXPENSE_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPaidExpense_cur field.
   */
  private void setTotalPaidExpense_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALPAIDEXPENSE_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPaidLoss field.
   */
  public void setTotalPaidLoss(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALPAIDLOSS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPaidLoss_amt field.
   */
  private void setTotalPaidLoss_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALPAIDLOSS_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPaidLoss_cur field.
   */
  private void setTotalPaidLoss_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALPAIDLOSS_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalRecoveries field.
   */
  public void setTotalRecoveries(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALRECOVERIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalRecoveries_amt field.
   */
  private void setTotalRecoveries_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALRECOVERIES_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalRecoveries_cur field.
   */
  private void setTotalRecoveries_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALRECOVERIES_CUR_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.LossFinancialsInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.LossFinancials.this.__getDelegateManager();
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
     * Gets the value of the AsOfDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAsOfDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ASOFDATE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the BeginDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBeginDate() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BEGINDATE_PROP.get());
    }
    
    /**
     * Gets the value of the EndDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEndDate() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ENDDATE_PROP.get());
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
     * Gets the value of the OpenExpenseReserves field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getOpenExpenseReserves() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(OPENEXPENSERESERVES_PROP.get());
    }
    
    /**
     * Gets the value of the OpenExpenseReserves_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getOpenExpenseReserves_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OPENEXPENSERESERVES_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the OpenExpenseReserves_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getOpenExpenseReserves_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(OPENEXPENSERESERVES_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the OpenLossReserves field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getOpenLossReserves() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(OPENLOSSRESERVES_PROP.get());
    }
    
    /**
     * Gets the value of the OpenLossReserves_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getOpenLossReserves_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OPENLOSSRESERVES_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the OpenLossReserves_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getOpenLossReserves_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(OPENLOSSRESERVES_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyNumber field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the TotalPaidExpense field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalPaidExpense() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALPAIDEXPENSE_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPaidExpense_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalPaidExpense_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALPAIDEXPENSE_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPaidExpense_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalPaidExpense_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALPAIDEXPENSE_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPaidLoss field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalPaidLoss() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALPAIDLOSS_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPaidLoss_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalPaidLoss_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALPAIDLOSS_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPaidLoss_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalPaidLoss_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALPAIDLOSS_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the TotalRecoveries field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalRecoveries() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALRECOVERIES_PROP.get());
    }
    
    /**
     * Gets the value of the TotalRecoveries_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalRecoveries_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALRECOVERIES_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalRecoveries_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalRecoveries_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALRECOVERIES_CUR_PROP.get());
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
     * Sets the value of the AsOfDate field.
     */
    public void setAsOfDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ASOFDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeginDate field.
     */
    public void setBeginDate(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BEGINDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EndDate field.
     */
    public void setEndDate(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ENDDATE_PROP.get(), value);
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
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the OpenExpenseReserves field.
     */
    public void setOpenExpenseReserves(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(OPENEXPENSERESERVES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenExpenseReserves_amt field.
     */
    public void setOpenExpenseReserves_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(OPENEXPENSERESERVES_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenExpenseReserves_cur field.
     */
    public void setOpenExpenseReserves_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(OPENEXPENSERESERVES_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenLossReserves field.
     */
    public void setOpenLossReserves(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(OPENLOSSRESERVES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenLossReserves_amt field.
     */
    public void setOpenLossReserves_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(OPENLOSSRESERVES_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpenLossReserves_cur field.
     */
    public void setOpenLossReserves_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(OPENLOSSRESERVES_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyNumber field.
     */
    public void setPolicyNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the TotalPaidExpense field.
     */
    public void setTotalPaidExpense(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALPAIDEXPENSE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPaidExpense_amt field.
     */
    public void setTotalPaidExpense_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALPAIDEXPENSE_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPaidExpense_cur field.
     */
    public void setTotalPaidExpense_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALPAIDEXPENSE_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPaidLoss field.
     */
    public void setTotalPaidLoss(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALPAIDLOSS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPaidLoss_amt field.
     */
    public void setTotalPaidLoss_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALPAIDLOSS_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPaidLoss_cur field.
     */
    public void setTotalPaidLoss_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALPAIDLOSS_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalRecoveries field.
     */
    public void setTotalRecoveries(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALRECOVERIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalRecoveries_amt field.
     */
    public void setTotalRecoveries_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALRECOVERIES_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalRecoveries_cur field.
     */
    public void setTotalRecoveries_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALRECOVERIES_CUR_PROP.get(), value);
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.LossFinancials.class, config);
    com.guidewire._generated.entity.LossFinancialsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.LossFinancials, com.guidewire._generated.entity.LossFinancialsInternal>() {
      public java.lang.Object getImplementation(entity.LossFinancials bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.LossFinancialsInternal getInternalInterface(entity.LossFinancials bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.LossFinancials newEmptyInstance() {
        return new entity.LossFinancials((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}