package entity;

/**
 * Reinsurable
 * A reinsurable delegate for all reinsurable risks of a policy. They could be locations, vehicles or the policy as a whole.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Reinsurable.eti;Reinsurable.eix;Reinsurable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class Reinsurable extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, gw.api.reinsurance.ReinsurableAdapter {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.Reinsurable, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.Reinsurable, entity.PolicyPeriod>("entity.Reinsurable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COVERAGEGROUP_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CoverageGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> REINSURANCECURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ReinsuranceCurrency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RISKNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RiskNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALINSUREDVALUE_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalInsuredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALINSUREDVALUE_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalInsuredValue_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALINSUREDVALUE_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalInsuredValue_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ReinsurableInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  protected Reinsurable(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.ReinsurableInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.ReinsurableInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public entity.Reinsurable clone() {
    return (entity.Reinsurable)__getInternalInterface().cloneUntyped();
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
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  public entity.Reinsurable getBasedOn() {
    return (entity.Reinsurable)__getInternalInterface().getBasedOnUntyped();
  }
  
  /**
   * Return the bean from which this bean was based (cloned), or null if this
   * bean is new to this branch. This value will never change for the life of
   * the bean as its set when the bean is first created, either as a bean new to
   * this branch (in which case it's null) or when this bean is cloned from a
   * bean in an existing branch when its branch is created.
   * <p/>
   * When compiling DiffItems a bean is always compared to it's based-on bean to
   * discover what fields on it have changed. If there is no based-on bean then
   * we know that this bean was new to this branch.
   * @return Bean on which this bean was based (cloned), or null if this bean is
   *         new to this branch.
   */
  public entity.EffDated getBasedOnUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Reinsurable getBasedOnValue() {
    return (entity.Reinsurable)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Return the branch associated with this bean. This can never be null, and
   * will never change. A bean will always be associated with the same branch.
   * @return Branch associated with this bean
   */
  public entity.EffDatedBranch getBranchUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
  }
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the ChangeType field.
   * Type of change made to this row
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffDatedChangeType getChangeType() {
    return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
  }
  
  /**
   * 
   * @return The reinsurable coverable that this reinsurable risk represents.
   */
  public gw.api.reinsurance.ReinsurableCoverable getCoverable() {
    return ((gw.api.reinsurance.ReinsurableAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.ReinsurableAdapter")).getCoverable();
  }
  
  /**
   * 
   * @return the currency associated with the agreement
   */
  public typekey.Currency getCoverageCurrency() {
    return ((com.guidewire.pc.domain.reinsurance.ReinsurablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.ReinsurablePublicMethods")).getCoverageCurrency();
  }
  
  /**
   * Gets the value of the CoverageGroup field.
   * The RI coverage group.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RICoverageGroupType getCoverageGroup() {
    return (typekey.RICoverageGroupType)__getInternalInterface().getFieldValue(COVERAGEGROUP_PROP.get());
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
   * Get an effective date independent key for this bean. This key will include
   * the BranchId and the FixedId. This is the key for the "logical" bean.
   * <p/>
   * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
   * the same throughout its effective range (or its period range) so there is
   * no difference between the "logical" bean and the actual bean.
   */
  public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
  }
  
  /**
   * Get the date when this bean starts being effective.
   * @return Date when this bean starts being effective.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
  }
  
  /**
   * Get the date when this bean expires.
   * @return Date when this bean expires.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Reinsurable getFixed() {
    return (entity.Reinsurable)__getInternalInterface().getFieldValue(FIXED_PROP.get());
  }
  
  /**
   * Get the logical ID for this bean, not the row ID. All row
   * @return Logical ID for this bean, not the row ID.
   */
  public gw.pl.persistence.core.Key getFixedId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Get the version list for an effective dated foreign key.  You need this
   * method because it's the only way to get the version list for a foreign key
   * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
   * since you can't traverse the array and there are no methods on
   * EffDatedVersionList to access a FK (only arrays).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key
   * @return Version list for an effective dated foreign key
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the ReinsuranceCurrency field.
   * Reinsurance Currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getReinsuranceCurrency() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(REINSURANCECURRENCY_PROP.get());
  }
  
  /**
   * Gets the value of the RiskNumber field.
   * The risk number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RISKNUMBER_PROP.get());
  }
  
  public entity.Reinsurable getSlice(java.util.Date sliceDate) {
    return (entity.Reinsurable)getSliceUntyped(sliceDate);
  }
  
  /**
   * Date which this bean is "sliced" or viewed. If you traverse from this bean
   * to another bean or beans via a link or array, only beans that are effective
   * at this slice date will be returned. The beans that are returned will be
   * sliced at this date as well. If NULL then the bean is in "window" mode.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return Date which bean is sliced or null if in window mode.
   */
  public java.util.Date getSliceDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
  }
  
  /**
   * Slice this bean at a particular date. This bean can be unsliced or sliced
   * when this method is called. The slice date must be within the effective
   * range of this bean or an exception will be thrown. If you want to get at
   * the version of this "logical" bean at a date outside of this particular
   * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
   * @param sliceDate Date at which to slice this bean.
   * @return Sliced version of the bean.
   */
  public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Reinsurable getSubtype() {
    return (typekey.Reinsurable)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the TotalInsuredValue field.
   * Total insured value (property coverage) or sum insured (liability coverage) for the risk.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalInsuredValue() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the TotalInsuredValue_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalInsuredValue_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalInsuredValue_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalInsuredValue_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALINSUREDVALUE_CUR_PROP.get());
  }
  
  public entity.Reinsurable getUnsliced() {
    return (entity.Reinsurable)getUnslicedUntyped();
  }
  
  /**
   * Return the unsliced version of this bean. If the bean is already unsliced
   * then returns itself.
   * @return An unsliced version of this bean. If the bean is already unsliced
   *         then returns itself.
   */
  public entity.EffDated getUnslicedUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
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
  
  public entity.windowed.ReinsurableVersionList getVersionList() {
    return (entity.windowed.ReinsurableVersionList)getVersionListUntyped();
  }
  
  /**
   * Get the version list for this bean. An EffDatedVersionList is a
   * representation of a logical bean through its effective range. For example,
   * if a bean has changes at three separate effective dates then the version
   * list will comprise 3 versions of the bean, one for each of these dates.
   * <p/>
   * You can use an EffDatedVersionList to traverse from this bean to other
   * linked beans in window mode. Recall that in window mode you cannot traverse
   * links directly from the bean.
   * <p/>
   * Although an EffDatedBranch only has a single version throughout its
   * effective range you can still get its EffDatedVersionList in order to
   * navigate in window mode from the branch to its related EffDateds.
   * @return Version list for this bean
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
  }
  
  /**
   * Given a date, check whether it falls within this bean's effective window.
   * @param effDate Date to check
   * @return True if date is within this bean's effective window.
   */
  public boolean isEffective(java.util.Date effDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
  }
  
  /**
   * Returns true if the given field has been modified relative to the based-on
   * bean and false if this bean has no based-on or if the field has the same
   * value as for the based-on bean.  This method only works with non-array
   * fields.
   * @param field the name of the property to check for changes, which must
   *              correspond to a database column (i.e. it can't be an array or
   *              a synthetic property)
   * @return true if the field has a different value for the based-on bean,
   *         false otherwise
   */
  public boolean isFieldChangedFromBasedOn(java.lang.String field) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
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
   * Check if this bean or branch has been promoted. A promoted bean is also
   * locked and cannot be changed.
   * <p/>
   * An EffDated is never promoted independent of its related
   * EffDatedBranch, meaning if the branch is promoted every bean in the graph
   * will be promoted, and if the branch is not promoted no bean in the graph
   * can be promoted.
   * @return True if promoted.
   */
  public boolean isPromoted() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
  }
  
  /**
   * Whether this bean is sliced. If a bean is sliced then you can navigate from
   * this bean to another bean or beans via a link or array, if it's unsliced
   * (in "window" mode) you cannot navigate from this bean.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return 
   */
  public boolean isSlice() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
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
   * Remove a reinsurable risk entirely from the term.  This is different from the normal
   * {@link entity.EffDated#remove()} mechanics that normally
   * truncate to the slice date.  This method removes and never persists a Reinsurable if
   * it has not been persisted.  If it has already been persisted, then it sets ExpirationDate
   * to the EffectiveDate so that it is a zero-length slice.
   */
  public void removeFromTerm() {
    ((com.guidewire.pc.domain.reinsurance.ReinsurablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.ReinsurablePublicMethods")).removeFromTerm();
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.Reinsurable value) {
    __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchValue field.
   */
  private void setBranchValue(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverageGroup field.
   */
  public void setCoverageGroup(typekey.RICoverageGroupType value) {
    __getInternalInterface().setFieldValue(COVERAGEGROUP_PROP.get(), value);
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
   * Change when the effective date of this bean. You cannot change the
   * effective date when in slice mode. In window mode there are no
   * restrictions.
   * <p/>
   * The effective date must be non-null. It must also come on or before the
   * expiration date and within the period range of its branch.
   * @param effDate New effective date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setEffectiveDate(java.util.Date effDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
  }
  
  /**
   * Change the effective and expiration dates together. This can only be called
   * in window mode. Both dates must be non-null. The effective date must be
   * before or equal to the expiration date. Both dates must be within the
   * period range of its branch.
   * @param effDate New effective date
   * @param expDate New expiration date
   */
  public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
  }
  
  /**
   * Change when the expiration date of this bean. You cannot change the
   * expiration date when in slice mode UNLESS the bean is new to its branch and
   * you're not setting the expiration date to the effective date (zero width).
   * In window mode there are no restrictions.
   * <p/>
   * The expiration date must be non-null. It must also come on or after the
   * effective date and within the period range of its branch.
   * @param expDate New expiration date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setExpirationDate(java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
  }
  
  /**
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.Reinsurable value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Set a foreign key by passing in an EFfDatedKey (effectively the
   * EffDatedVersionList or FixedId of the bean). You need this method because
   * it's the only way to set a foreign key given a FixedId (and no context for
   * when that FixeId might be effective).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key to set
   * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
   *             FixedId of the bean)
   */
  public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
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
   * Sets the value of the ReinsuranceCurrency field.
   */
  public void setReinsuranceCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(REINSURANCECURRENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RiskNumber field.
   */
  public void setRiskNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RISKNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.Reinsurable value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalInsuredValue field.
   */
  public void setTotalInsuredValue(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalInsuredValue_amt field.
   */
  private void setTotalInsuredValue_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalInsuredValue_cur field.
   */
  private void setTotalInsuredValue_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALINSUREDVALUE_CUR_PROP.get(), value);
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
  
  public entity.Reinsurable split(java.util.Date splitDate) {
    return (entity.Reinsurable)splitUntyped(splitDate);
  }
  
  /**
   * Split this bean at the given date. A bean can only be split in window mode.
   * Splitting creates a new bean (and row) with the same FixedId as this bean
   * which is effective from the original effective date of this bean to the
   * split date. We then move the effective date of this bean up to the split
   * date. The result is two beans: one effective from the original effective
   * date to the split date, the other effective from the split date to the
   * original expiration date. "This" bean is the later in that range, and the
   * bean returned from calling this method is the former in that range.
   * <p/>
   * If this bean's effective date equals the split date then no split will
   * occur. The split date must be within the effective range of this bean or an
   * exception is thrown.
   * @param splitDate Date on which to split this bean.
   * @return A new bean effective from the original effective date to the split
   *         date or this bean if no split occurred (see above).
   */
  public entity.EffDated splitUntyped(java.util.Date splitDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
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
    com.guidewire._generated.entity.ReinsurableInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.Reinsurable, com.guidewire._generated.entity.ReinsurableInternal>() {
      public java.lang.Object getImplementation(entity.Reinsurable bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ReinsurableInternal getInternalInterface(entity.Reinsurable bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}