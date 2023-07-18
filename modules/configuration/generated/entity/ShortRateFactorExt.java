package entity;

/**
 * ShortRateFactorExt
 * 
 *     A sample table storing short rate cancellation proration factors.  The table and code using it assumes an
 *       annual term of 365 or 366 days.  Non-annual terms must be normalized in order to use this table.  Factors can
 *       be state-specific or be a default for all states, state=null, with state-specific rates overriding defaults.
 *       Lastly, all factors have an effective period, [effDate-expDate) where a null date means that side of the range
 *       is unbounded.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ShortRateFactorExt.eti;ShortRateFactorExt.eix;ShortRateFactorExt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ShortRateFactorExt")
public class ShortRateFactorExt extends com.guidewire.pl.persistence.code.BeanBase implements entity.KeyableBean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ShortRateFactorExt> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ShortRateFactorExt>("entity.ShortRateFactorExt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DAYSINPERIOD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "daysInPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "effDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "expDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RATESTATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "rateState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SHORTRATEFACTOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "shortRateFactor");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SHORTRATEPERCENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "shortRatePercent");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ShortRateFactorExtInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ShortRateFactorExt()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ShortRateFactorExt(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ShortRateFactorExt(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ShortRateFactorExtInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ShortRateFactorExtInternal __getInternalInterface() {
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
   * 
   * @return Unique identifier of the object.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.commons.entity.Keyable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Keyable")).getID();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the daysInPeriod field.
   * The number of non-canceled days that the policy was in effect.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getdaysInPeriod() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(DAYSINPERIOD_PROP.get());
  }
  
  /**
   * Gets the value of the effDate field.
   * The date on which this factor becomes effective (inclusive).  A null date means this has always been effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date geteffDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EFFDATE_PROP.get());
  }
  
  /**
   * Gets the value of the expDate field.
   * The date on which this factor expires (exclusive).  A null date means this will always be effective.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getexpDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPDATE_PROP.get());
  }
  
  /**
   * Gets the value of the rateState field.
   * Indicates a rate is applicable to a given state.  Null indicates a default rate which can be overridden by a rate specific to a state.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getrateState() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RATESTATE_PROP.get());
  }
  
  /**
   * Gets the value of the shortRateFactor field.
   * The amount that an already prorated value should be multiplied by to get to the short rate proration %.  For example, if premiums were already prorated by 50%, then a factor of 1.2 would get the amount up to the intended 60% (amount * 0.5 * 1.2 = amount * 0.6).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getshortRateFactor() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(SHORTRATEFACTOR_PROP.get());
  }
  
  /**
   * Gets the value of the shortRatePercent field.
   * The proration factor (vs. the full term) that should be used.  For example, if (non-canceled length / term length) = 50%, the short rate % might be 60%.  Stored as a decimal, so 50% should be 0.5000.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getshortRatePercent() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(SHORTRATEPERCENT_PROP.get());
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the daysInPeriod field.
   */
  public void setdaysInPeriod(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(DAYSINPERIOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the effDate field.
   */
  public void seteffDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EFFDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the expDate field.
   */
  public void setexpDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the rateState field.
   */
  public void setrateState(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RATESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the shortRateFactor field.
   */
  public void setshortRateFactor(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(SHORTRATEFACTOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the shortRatePercent field.
   */
  public void setshortRatePercent(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(SHORTRATEPERCENT_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ShortRateFactorExtInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ShortRateFactorExt.this.__getDelegateManager();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the daysInPeriod field.
     * The number of non-canceled days that the policy was in effect.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getdaysInPeriod() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(DAYSINPERIOD_PROP.get());
    }
    
    /**
     * Gets the value of the effDate field.
     * The date on which this factor becomes effective (inclusive).  A null date means this has always been effective.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date geteffDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EFFDATE_PROP.get());
    }
    
    /**
     * Gets the value of the expDate field.
     * The date on which this factor expires (exclusive).  A null date means this will always be effective.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getexpDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EXPDATE_PROP.get());
    }
    
    /**
     * Gets the value of the rateState field.
     * Indicates a rate is applicable to a given state.  Null indicates a default rate which can be overridden by a rate specific to a state.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getrateState() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RATESTATE_PROP.get());
    }
    
    /**
     * Gets the value of the shortRateFactor field.
     * The amount that an already prorated value should be multiplied by to get to the short rate proration %.  For example, if premiums were already prorated by 50%, then a factor of 1.2 would get the amount up to the intended 60% (amount * 0.5 * 1.2 = amount * 0.6).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getshortRateFactor() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(SHORTRATEFACTOR_PROP.get());
    }
    
    /**
     * Gets the value of the shortRatePercent field.
     * The proration factor (vs. the full term) that should be used.  For example, if (non-canceled length / term length) = 50%, the short rate % might be 60%.  Stored as a decimal, so 50% should be 0.5000.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getshortRatePercent() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(SHORTRATEPERCENT_PROP.get());
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the daysInPeriod field.
     */
    public void setdaysInPeriod(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(DAYSINPERIOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the effDate field.
     */
    public void seteffDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EFFDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the expDate field.
     */
    public void setexpDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the rateState field.
     */
    public void setrateState(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RATESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the shortRateFactor field.
     */
    public void setshortRateFactor(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(SHORTRATEFACTOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the shortRatePercent field.
     */
    public void setshortRatePercent(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(SHORTRATEPERCENT_PROP.get(), value);
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ShortRateFactorExt.class, config);
    com.guidewire._generated.entity.ShortRateFactorExtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ShortRateFactorExt, com.guidewire._generated.entity.ShortRateFactorExtInternal>() {
      public java.lang.Object getImplementation(entity.ShortRateFactorExt bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ShortRateFactorExtInternal getInternalInterface(entity.ShortRateFactorExt bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ShortRateFactorExt newEmptyInstance() {
        return new entity.ShortRateFactorExt((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}