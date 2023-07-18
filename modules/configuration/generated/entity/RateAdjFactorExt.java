package entity;

/**
 * RateAdjFactorExt
 * 
 *     A sample table storing various adjustment factors used in rating calculations.  It supports either factors that
 *       are matched exactly on string values, stringOption, stringOption2, or factors that fall within an
 *       inclusive numeric range, [minNumber-maxNumber].  Factors can be state-specific or be a default for all
 *       states, state=null, with state-specific rates overriding defaults.  Lastly, all factors have an effective
 *       period, [effDate-expDate) where a null date means that side of the range is unbounded.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateAdjFactorExt.eti;RateAdjFactorExt.eix;RateAdjFactorExt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RateAdjFactorExt")
public class RateAdjFactorExt extends com.guidewire.pl.persistence.code.BeanBase implements entity.KeyableBean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RateAdjFactorExt> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RateAdjFactorExt>("entity.RateAdjFactorExt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "effDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "expDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FACTOR_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "factor");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FACTORNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "factorName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FACTORSTATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "factorState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MAXNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "maxNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MINNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "minNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGOPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "stringOption");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGOPTION2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "stringOption2");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RateAdjFactorExtInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RateAdjFactorExt()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RateAdjFactorExt(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RateAdjFactorExt(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RateAdjFactorExtInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RateAdjFactorExtInternal __getInternalInterface() {
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
   * Gets the value of the factor field.
   * The base rate to be used.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getfactor() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(FACTOR_PROP.get());
  }
  
  /**
   * Gets the value of the factorName field.
   * This field indicates the name of the factor that should be applied.  Look-ups are always within a named factor.  Using this allows a single table to provide rating factors for many different types of simple (single parameter) look-ups.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getfactorName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FACTORNAME_PROP.get());
  }
  
  /**
   * Gets the value of the factorState field.
   * Indicates a rate is applicable to a given state.  Null indicates a default rate which can be overridden by a rate specific to a state.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getfactorState() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FACTORSTATE_PROP.get());
  }
  
  /**
   * Gets the value of the maxNumber field.
   * The maximum of the inclusive number range for which a given lookup value should fall within.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getmaxNumber() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(MAXNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the minNumber field.
   * The minimum of the inclusive number range for which a given lookup value should fall within.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getminNumber() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(MINNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the stringOption field.
   * This field should store a string value, such as the code for a typecode field, which will be used for looking up a factor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstringOption() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGOPTION_PROP.get());
  }
  
  /**
   * Gets the value of the stringOption2 field.
   * This field should store a secondary string value used for looking up a factor.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstringOption2() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGOPTION2_PROP.get());
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
   * Sets the value of the factor field.
   */
  public void setfactor(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(FACTOR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the factorName field.
   */
  public void setfactorName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FACTORNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the factorState field.
   */
  public void setfactorState(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FACTORSTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the maxNumber field.
   */
  public void setmaxNumber(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(MAXNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the minNumber field.
   */
  public void setminNumber(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(MINNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the stringOption field.
   */
  public void setstringOption(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STRINGOPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the stringOption2 field.
   */
  public void setstringOption2(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STRINGOPTION2_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RateAdjFactorExtInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RateAdjFactorExt.this.__getDelegateManager();
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
     * Gets the value of the factor field.
     * The base rate to be used.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getfactor() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(FACTOR_PROP.get());
    }
    
    /**
     * Gets the value of the factorName field.
     * This field indicates the name of the factor that should be applied.  Look-ups are always within a named factor.  Using this allows a single table to provide rating factors for many different types of simple (single parameter) look-ups.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getfactorName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FACTORNAME_PROP.get());
    }
    
    /**
     * Gets the value of the factorState field.
     * Indicates a rate is applicable to a given state.  Null indicates a default rate which can be overridden by a rate specific to a state.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getfactorState() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FACTORSTATE_PROP.get());
    }
    
    /**
     * Gets the value of the maxNumber field.
     * The maximum of the inclusive number range for which a given lookup value should fall within.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getmaxNumber() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(MAXNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the minNumber field.
     * The minimum of the inclusive number range for which a given lookup value should fall within.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getminNumber() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(MINNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the stringOption field.
     * This field should store a string value, such as the code for a typecode field, which will be used for looking up a factor.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstringOption() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGOPTION_PROP.get());
    }
    
    /**
     * Gets the value of the stringOption2 field.
     * This field should store a secondary string value used for looking up a factor.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstringOption2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STRINGOPTION2_PROP.get());
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
     * Sets the value of the factor field.
     */
    public void setfactor(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(FACTOR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the factorName field.
     */
    public void setfactorName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FACTORNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the factorState field.
     */
    public void setfactorState(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FACTORSTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the maxNumber field.
     */
    public void setmaxNumber(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(MAXNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the minNumber field.
     */
    public void setminNumber(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(MINNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the stringOption field.
     */
    public void setstringOption(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STRINGOPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the stringOption2 field.
     */
    public void setstringOption2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STRINGOPTION2_PROP.get(), value);
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RateAdjFactorExt.class, config);
    com.guidewire._generated.entity.RateAdjFactorExtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RateAdjFactorExt, com.guidewire._generated.entity.RateAdjFactorExtInternal>() {
      public java.lang.Object getImplementation(entity.RateAdjFactorExt bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RateAdjFactorExtInternal getInternalInterface(entity.RateAdjFactorExt bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RateAdjFactorExt newEmptyInstance() {
        return new entity.RateAdjFactorExt((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}