package entity;

/**
 * WCRatingStepExt
 * 
 *     A sample table storing additional steps for rating Workers Comp policies after the basic calculation of
 *       manual premiums (premiums for each location/class code exposure unit).
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRatingStepExt.eti;WCRatingStepExt.eix;WCRatingStepExt.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "WCRatingStepExt")
public class WCRatingStepExt extends com.guidewire.pl.persistence.code.BeanBase implements entity.KeyableBean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.WCRatingStepExt> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.WCRatingStepExt>("entity.WCRatingStepExt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AGGCOSTTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "aggCostType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AMOUNTTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "amountType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CALCORDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "calcOrder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLASSCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "classcode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CUSTOMACTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "customAction");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "effDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "expDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FACTORNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "factorName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INCLUDEINREPORTS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "includeInReports");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MODIFIERID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "modifierID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RATECONVERSIONTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "rateConversionType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RATESTATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "rateState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STEPACTION_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "stepAction");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTOTAL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "subtotal");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.WCRatingStepExtInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public WCRatingStepExt()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public WCRatingStepExt(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected WCRatingStepExt(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.WCRatingStepExtInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.WCRatingStepExtInternal __getInternalInterface() {
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
   * Gets the value of the aggCostType field.
   * Indicates the type of aggregate cost (not specific to a single location/class code exposure unit) to be used for the resulting costs, if any.  Should be non-null unless this row is not expected to result in a new cost (e.g. just stores a sub-total).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCJurisdictionCostType getaggCostType() {
    return (typekey.WCJurisdictionCostType)__getInternalInterface().getFieldValue(AGGCOSTTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the amountType field.
   * Indicates the type (standard vs non-standard premium or taxes/surcharges) of the amount calculated, if any.  Should be non-null unless this row is not expected to result in a new rating line (e.g. just stores a sub-total).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateAmountType getamountType() {
    return (typekey.RateAmountType)__getInternalInterface().getFieldValue(AMOUNTTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the calcOrder field.
   * Determines the order in which the steps should be executed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getcalcOrder() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(CALCORDER_PROP.get());
  }
  
  /**
   * Gets the value of the classcode field.
   * Indicates the class code that should be used for the resulting premiums, if any.  Should be non-null unless this row is not expected to result in a new rating line (e.g. just stores a sub-total).
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getclasscode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSCODE_PROP.get());
  }
  
  /**
   * Gets the value of the customAction field.
   * If stepAction is Custom, then this indicates which custom action to execute.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getcustomAction() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CUSTOMACTION_PROP.get());
  }
  
  /**
   * Gets the value of the description field.
   * If non-null, this description will be used instead of that of the AggRatingLineType for describing the resulting premiums.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getdescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
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
   * Gets the value of the factorName field.
   * This field should match the factorName for the correct factor in RateAdjFactor.  Used for taxes and fees.  Also used if the modifier is a boolean type because, if true, the system needs to look up the rate to apply.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getfactorName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FACTORNAME_PROP.get());
  }
  
  /**
   * Gets the value of the modifierID field.
   * Should match the modifier pattern's public ID.  If stepAction is Modifier, then this should be non-null to indicate which modifier to look-up for the calculation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getmodifierID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MODIFIERID_PROP.get());
  }
  
  /**
   * Gets the value of the rateConversionType field.
   * If step action looks up a rate and uses it to calculate a new amount, then this field defines how the rate should be interpreted.  (See typelist for a description of options.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateConversionType getrateConversionType() {
    return (typekey.RateConversionType)__getInternalInterface().getFieldValue(RATECONVERSIONTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the rateState field.
   * Indicates a row is applicable to a given jurisdiction.  Null indicates a default row which is applicable to all jurisdictions which have no jurisdiction-specific rows for the given effective date. This should be the string value of a typecode in the Jurisdiction typelist. For example, if this is a typecode allowed in the US state of California, the value should be 'CA'. 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getrateState() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RATESTATE_PROP.get());
  }
  
  /**
   * Gets the value of the stepAction field.
   * Explains what action should be taken for this step.  Some steps reuse generic actions and others require a Custom action.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.WCRateStepAction getstepAction() {
    return (typekey.WCRateStepAction)__getInternalInterface().getFieldValue(STEPACTION_PROP.get());
  }
  
  /**
   * Gets the value of the subtotal field.
   * If step action is Subtotal, then this defines which subtotal to calc and store.  Other step actions also optionally use this to lookup a previously saved subtotal as the basis for the step's calculation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateSubtotalType getsubtotal() {
    return (typekey.RateSubtotalType)__getInternalInterface().getFieldValue(SUBTOTAL_PROP.get());
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
   * Gets the value of the includeInReports field.
   * Indicates whether or not this rating step should be performed for premium report jobs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isincludeInReports() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(INCLUDEINREPORTS_PROP.get());
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
   * Sets the value of the aggCostType field.
   */
  public void setaggCostType(typekey.WCJurisdictionCostType value) {
    __getInternalInterface().setFieldValue(AGGCOSTTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the amountType field.
   */
  public void setamountType(typekey.RateAmountType value) {
    __getInternalInterface().setFieldValue(AMOUNTTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the calcOrder field.
   */
  public void setcalcOrder(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(CALCORDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the classcode field.
   */
  public void setclasscode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CLASSCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the customAction field.
   */
  public void setcustomAction(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CUSTOMACTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the description field.
   */
  public void setdescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
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
   * Sets the value of the factorName field.
   */
  public void setfactorName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FACTORNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the includeInReports field.
   */
  public void setincludeInReports(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(INCLUDEINREPORTS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the modifierID field.
   */
  public void setmodifierID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MODIFIERID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the rateConversionType field.
   */
  public void setrateConversionType(typekey.RateConversionType value) {
    __getInternalInterface().setFieldValue(RATECONVERSIONTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the rateState field.
   */
  public void setrateState(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RATESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the stepAction field.
   */
  public void setstepAction(typekey.WCRateStepAction value) {
    __getInternalInterface().setFieldValue(STEPACTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the subtotal field.
   */
  public void setsubtotal(typekey.RateSubtotalType value) {
    __getInternalInterface().setFieldValue(SUBTOTAL_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.WCRatingStepExtInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.WCRatingStepExt.this.__getDelegateManager();
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
     * Gets the value of the aggCostType field.
     * Indicates the type of aggregate cost (not specific to a single location/class code exposure unit) to be used for the resulting costs, if any.  Should be non-null unless this row is not expected to result in a new cost (e.g. just stores a sub-total).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.WCJurisdictionCostType getaggCostType() {
      return (typekey.WCJurisdictionCostType)__getInternalInterface().getFieldValue(AGGCOSTTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the amountType field.
     * Indicates the type (standard vs non-standard premium or taxes/surcharges) of the amount calculated, if any.  Should be non-null unless this row is not expected to result in a new rating line (e.g. just stores a sub-total).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RateAmountType getamountType() {
      return (typekey.RateAmountType)__getInternalInterface().getFieldValue(AMOUNTTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the calcOrder field.
     * Determines the order in which the steps should be executed.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getcalcOrder() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(CALCORDER_PROP.get());
    }
    
    /**
     * Gets the value of the classcode field.
     * Indicates the class code that should be used for the resulting premiums, if any.  Should be non-null unless this row is not expected to result in a new rating line (e.g. just stores a sub-total).
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getclasscode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CLASSCODE_PROP.get());
    }
    
    /**
     * Gets the value of the customAction field.
     * If stepAction is Custom, then this indicates which custom action to execute.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getcustomAction() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CUSTOMACTION_PROP.get());
    }
    
    /**
     * Gets the value of the description field.
     * If non-null, this description will be used instead of that of the AggRatingLineType for describing the resulting premiums.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getdescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
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
     * Gets the value of the factorName field.
     * This field should match the factorName for the correct factor in RateAdjFactor.  Used for taxes and fees.  Also used if the modifier is a boolean type because, if true, the system needs to look up the rate to apply.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getfactorName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FACTORNAME_PROP.get());
    }
    
    /**
     * Gets the value of the modifierID field.
     * Should match the modifier pattern's public ID.  If stepAction is Modifier, then this should be non-null to indicate which modifier to look-up for the calculation.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getmodifierID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MODIFIERID_PROP.get());
    }
    
    /**
     * Gets the value of the rateConversionType field.
     * If step action looks up a rate and uses it to calculate a new amount, then this field defines how the rate should be interpreted.  (See typelist for a description of options.)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RateConversionType getrateConversionType() {
      return (typekey.RateConversionType)__getInternalInterface().getFieldValue(RATECONVERSIONTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the rateState field.
     * Indicates a row is applicable to a given jurisdiction.  Null indicates a default row which is applicable to all jurisdictions which have no jurisdiction-specific rows for the given effective date. This should be the string value of a typecode in the Jurisdiction typelist. For example, if this is a typecode allowed in the US state of California, the value should be 'CA'. 
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getrateState() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RATESTATE_PROP.get());
    }
    
    /**
     * Gets the value of the stepAction field.
     * Explains what action should be taken for this step.  Some steps reuse generic actions and others require a Custom action.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.WCRateStepAction getstepAction() {
      return (typekey.WCRateStepAction)__getInternalInterface().getFieldValue(STEPACTION_PROP.get());
    }
    
    /**
     * Gets the value of the subtotal field.
     * If step action is Subtotal, then this defines which subtotal to calc and store.  Other step actions also optionally use this to lookup a previously saved subtotal as the basis for the step's calculation.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RateSubtotalType getsubtotal() {
      return (typekey.RateSubtotalType)__getInternalInterface().getFieldValue(SUBTOTAL_PROP.get());
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
    
    /**
     * Gets the value of the includeInReports field.
     * Indicates whether or not this rating step should be performed for premium report jobs
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isincludeInReports() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(INCLUDEINREPORTS_PROP.get());
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
     * Sets the value of the aggCostType field.
     */
    public void setaggCostType(typekey.WCJurisdictionCostType value) {
      __getInternalInterface().setFieldValue(AGGCOSTTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the amountType field.
     */
    public void setamountType(typekey.RateAmountType value) {
      __getInternalInterface().setFieldValue(AMOUNTTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the calcOrder field.
     */
    public void setcalcOrder(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(CALCORDER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the classcode field.
     */
    public void setclasscode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CLASSCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the customAction field.
     */
    public void setcustomAction(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CUSTOMACTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the description field.
     */
    public void setdescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
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
     * Sets the value of the factorName field.
     */
    public void setfactorName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FACTORNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the includeInReports field.
     */
    public void setincludeInReports(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(INCLUDEINREPORTS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the modifierID field.
     */
    public void setmodifierID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MODIFIERID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the rateConversionType field.
     */
    public void setrateConversionType(typekey.RateConversionType value) {
      __getInternalInterface().setFieldValue(RATECONVERSIONTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the rateState field.
     */
    public void setrateState(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(RATESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the stepAction field.
     */
    public void setstepAction(typekey.WCRateStepAction value) {
      __getInternalInterface().setFieldValue(STEPACTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the subtotal field.
     */
    public void setsubtotal(typekey.RateSubtotalType value) {
      __getInternalInterface().setFieldValue(SUBTOTAL_PROP.get(), value);
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.WCRatingStepExt.class, config);
    com.guidewire._generated.entity.WCRatingStepExtInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.WCRatingStepExt, com.guidewire._generated.entity.WCRatingStepExtInternal>() {
      public java.lang.Object getImplementation(entity.WCRatingStepExt bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.WCRatingStepExtInternal getInternalInterface(entity.WCRatingStepExt bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.WCRatingStepExt newEmptyInstance() {
        return new entity.WCRatingStepExt((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}