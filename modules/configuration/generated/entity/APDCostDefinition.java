package entity;

/**
 * APDCostDefinition
 * The definition of a cost
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCostDefinition.eti;APDCostDefinition.eix;APDCostDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class APDCostDefinition extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.APDCostDefinition> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.APDCostDefinition>("entity.APDCostDefinition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASIS_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Basis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> COSTCODE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CostCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COSTCODEFILTERS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CostCodeFilters");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COSTSTEPS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CostSteps");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CUMULATIVECOSTBASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CumulativeCostBasis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> JURISDICTIONFILTER_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "JurisdictionFilter");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRICINGORDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PricingOrder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RATEAMOUNTTYPEFILTER_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RateAmountTypeFilter");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RATINGSCALE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RatingScale");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEPARATEBILLING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SeparateBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEPARATECOLLECTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SeparateCollection");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.APDCostDefinitionInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  protected APDCostDefinition(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.APDCostDefinitionInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.APDCostDefinitionInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the CostCodeFilters array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostCodeFilters(entity.APDCostCodeFilter element) {
    __getInternalInterface().addArrayElement(COSTCODEFILTERS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the CostSteps array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCostSteps(entity.APDCostStepDefinition element) {
    __getInternalInterface().addArrayElement(COSTSTEPS_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the Basis field.
   * The term/coverable attribute used as the basis, if appropriate
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getBasis() {
    return (entity.APDAttribute)__getInternalInterface().getFieldValue(BASIS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CostCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CostCode getCostCode() {
    return (entity.CostCode)__getInternalInterface().getFieldValue(COSTCODE_PROP.get());
  }
  
  /**
   * Gets the value of the CostCodeFilters field.
   * If set, accumulated costs accumulate for only these cost codes when calculating the basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCostCodeFilter[] getCostCodeFilters() {
    return (entity.APDCostCodeFilter[])__getInternalInterface().getFieldValue(COSTCODEFILTERS_PROP.get());
  }
  
  /**
   * Gets the value of the CostSteps field.
   * The optional steps defined to create this price
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCostStepDefinition[] getCostSteps() {
    return (entity.APDCostStepDefinition[])__getInternalInterface().getFieldValue(COSTSTEPS_PROP.get());
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the JurisdictionFilter field.
   * If set, accumulated costs accumulate for only this jurisdiction when calculating the basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdictionFilter() {
    return (typekey.Jurisdiction)__getInternalInterface().getFieldValue(JURISDICTIONFILTER_PROP.get());
  }
  
  /**
   * Gets the value of the PricingOrder field.
   * The order in which the price is calculated (within its set)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPricingOrder() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(PRICINGORDER_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RateAmountTypeFilter field.
   * If set, accumulated costs accumulate for only this rate amount type when calculating the basis
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateAmountType getRateAmountTypeFilter() {
    return (typekey.RateAmountType)__getInternalInterface().getFieldValue(RATEAMOUNTTYPEFILTER_PROP.get());
  }
  
  /**
   * Gets the value of the RatingScale field.
   * The scale of the basis to which the rate is applied
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RatingScale getRatingScale() {
    return (typekey.RatingScale)__getInternalInterface().getFieldValue(RATINGSCALE_PROP.get());
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
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCostDefinition getSubtype() {
    return (typekey.APDCostDefinition)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
   * Gets the value of the CumulativeCostBasis field.
   * If true, the basis is the sum of prior calculated costs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCumulativeCostBasis() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CUMULATIVECOSTBASIS_PROP.get());
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
   * Gets the value of the SeparateBilling field.
   * If true, this cost will create an individual debtors charge for billing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateBilling() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SEPARATEBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the SeparateCollection field.
   * If true, this cost will create an individual debtors charge for cash allocation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeparateCollection() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SEPARATECOLLECTION_PROP.get());
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
   * Removes the given element from the CostCodeFilters array. This is achieved by marking the element for removal.
   */
  public void removeFromCostCodeFilters(entity.APDCostCodeFilter element) {
    __getInternalInterface().removeArrayElement(COSTCODEFILTERS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CostCodeFilters array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostCodeFilters(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COSTCODEFILTERS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the CostSteps array. This is achieved by marking the element for removal.
   */
  public void removeFromCostSteps(entity.APDCostStepDefinition element) {
    __getInternalInterface().removeArrayElement(COSTSTEPS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CostSteps array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCostSteps(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COSTSTEPS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the Basis field.
   */
  public void setBasis(entity.APDAttribute value) {
    __getInternalInterface().setFieldValue(BASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CostCode field.
   */
  public void setCostCode(entity.CostCode value) {
    __getInternalInterface().setFieldValue(COSTCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CostCodeFilters field.
   */
  public void setCostCodeFilters(entity.APDCostCodeFilter[] value) {
    __getInternalInterface().setFieldValue(COSTCODEFILTERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CostSteps field.
   */
  public void setCostSteps(entity.APDCostStepDefinition[] value) {
    __getInternalInterface().setFieldValue(COSTSTEPS_PROP.get(), value);
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
   * Sets the value of the CumulativeCostBasis field.
   */
  public void setCumulativeCostBasis(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CUMULATIVECOSTBASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the JurisdictionFilter field.
   */
  public void setJurisdictionFilter(typekey.Jurisdiction value) {
    __getInternalInterface().setFieldValue(JURISDICTIONFILTER_PROP.get(), value);
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
   * Sets the value of the PricingOrder field.
   */
  public void setPricingOrder(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(PRICINGORDER_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RateAmountTypeFilter field.
   */
  public void setRateAmountTypeFilter(typekey.RateAmountType value) {
    __getInternalInterface().setFieldValue(RATEAMOUNTTYPEFILTER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RatingScale field.
   */
  public void setRatingScale(typekey.RatingScale value) {
    __getInternalInterface().setFieldValue(RATINGSCALE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SeparateBilling field.
   */
  public void setSeparateBilling(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(SEPARATEBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SeparateCollection field.
   */
  public void setSeparateCollection(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(SEPARATECOLLECTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.APDCostDefinition value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
  
  static {
    com.guidewire._generated.entity.APDCostDefinitionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.APDCostDefinition, com.guidewire._generated.entity.APDCostDefinitionInternal>() {
      public java.lang.Object getImplementation(entity.APDCostDefinition bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.APDCostDefinitionInternal getInternalInterface(entity.APDCostDefinition bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}