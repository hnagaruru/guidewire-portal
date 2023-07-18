package entity;

/**
 * RateTableDefinition
 * The table holds metadata information for a rate table
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTableDefinition.eti;RateTableDefinition.eix;RateTableDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RateTableDefinition")
public class RateTableDefinition extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RateTableDefinition> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RateTableDefinition>("entity.RateTableDefinition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ARGUMENTSOURCESETS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ArgumentSourceSets");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENTITYNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EntityName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> FACTORS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Factors");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> MATCHOPS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "MatchOps");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYLINE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyLine");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TABLECODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TableCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TABLEDESC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TableDesc");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TABLEDESC_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "TableDesc_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TABLENAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TableName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TABLENAME_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "TableName_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RateTableDefinitionInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RateTableDefinition()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RateTableDefinition(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RateTableDefinition(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RateTableDefinitionInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RateTableDefinitionInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the ArgumentSourceSets array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToArgumentSourceSets(entity.RateTableArgumentSourceSet element) {
    __getInternalInterface().addArrayElement(ARGUMENTSOURCESETS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Factors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFactors(entity.RateTableColumn element) {
    __getInternalInterface().addArrayElement(FACTORS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the MatchOps array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMatchOps(entity.RateTableMatchOp element) {
    __getInternalInterface().addArrayElement(MATCHOPS_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the ArgumentSourceSets field.
   * The Parameter Sets for this Table.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableArgumentSourceSet[] getArgumentSourceSets() {
    return (entity.RateTableArgumentSourceSet[])__getInternalInterface().getFieldValue(ARGUMENTSOURCESETS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Get the precision for a given column on the RateTableDefinition's row entity,
   * Will return an integer iff (1) the name matches a column on the entity, and
   * (2) the column is a datatype that has a defined precision.
   * @param columnName name of the column we're interested in
   * @return database precision for the named column, or null if none
   */
  public java.lang.Integer getColumnPrecision(java.lang.String columnName) {
    return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getColumnPrecision(columnName);
  }
  
  /**
   * Get the scale for a given column on the RateTableDefinition's row entity,
   * Will return an integer iff (1) the name matches a column on the entity, and
   * (2) the column is a datatype that has a defined scale.
   * @param columnName name of the column we're interested in
   * @return database scale for the named column, or null if none
   */
  public java.lang.Integer getColumnScale(java.lang.String columnName) {
    return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getColumnScale(columnName);
  }
  
  /**
   * Evaluate whether FactorRowEntity has a covering index (an index which, at a minimum, contains the foreign key
   * to the rate table, and all parameters.  The fastest-performing index will also contain the factors, because
   * it allows the database to return the desired result without having to retrieve rows.
   * @return a value in the enum CoveringIndexType describing how thoroughly the FactorRowEntity is indexed.
   */
  public gw.pc.rating.entity.CoveringIndexType getCoveringIndexType() {
    return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getCoveringIndexType();
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
   * Gets the value of the EntityName field.
   * Name of the physical table that will hold the data for this table.        This may be empty when using the generic physical table rather than a custom one,      although this field can optionally contain the generic physical table's name when using it.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEntityName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ENTITYNAME_PROP.get());
  }
  
  /**
   * Gets the value of the Factors field.
   * The list of factor definitions for this table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableColumn[] getFactors() {
    return (entity.RateTableColumn[])__getInternalInterface().getFieldValue(FACTORS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the MatchOps field.
   * The list of matching operations for this rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOp[] getMatchOps() {
    return (entity.RateTableMatchOp[])__getInternalInterface().getFieldValue(MATCHOPS_PROP.get());
  }
  
  /**
   * Get the match op with the given name, or null if no match.
   * Implementation should be free to cache the mapping from name to matchop.
   * @param name The name of the desired matchop
   * @return the RateTableMatchOp whose name matches the given name
   */
  public entity.RateTableMatchOp getNamedMatchOp(java.lang.String name) {
    return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getNamedMatchOp(name);
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Get the match operations, sorted by SortOrder of their first parameter.
   * Implementation should be free to cache this result.
   * @return this.MatchOps, sorted by the first parameter's sort order
   */
  public entity.RateTableMatchOp[] getSortedMatchOpArray() {
    return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getSortedMatchOpArray();
  }
  
  /**
   * Get the match operations, sorted by SortOrder of their first parameter.
   * Implementation should be free to cache this result.
   * @return this.MatchOps, sorted by the first parameter's sort order
   */
  public java.util.List<entity.RateTableMatchOp> getSortedMatchOps() {
    return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getSortedMatchOps();
  }
  
  /**
   * Gets the value of the TableCode field.
   * The rate table code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TABLECODE_PROP.get());
  }
  
  /**
   * Gets the value of the TableDesc field.
   * Description of the rate data that is stored by this table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableDesc() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TABLEDESC_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition_TableDesc_L10N[] getTableDesc_L10N_ARRAY() {
    return (entity.RateTableDefinition_TableDesc_L10N[])__getInternalInterface().getFieldValue(TABLEDESC_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array TableDesc_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableDesc_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("TableDesc_en_US"));
  }
  
  /**
   * Gets the value of the TableName field.
   * The logical name of the rate table. Note: The rating data is stored in a separate physical table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TABLENAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition_TableName_L10N[] getTableName_L10N_ARRAY() {
    return (entity.RateTableDefinition_TableName_L10N[])__getInternalInterface().getFieldValue(TABLENAME_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array TableName_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableName_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("TableName_en_US"));
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
   * Removes the given element from the ArgumentSourceSets array. This is achieved by marking the element for removal.
   */
  public void removeFromArgumentSourceSets(entity.RateTableArgumentSourceSet element) {
    __getInternalInterface().removeArrayElement(ARGUMENTSOURCESETS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the ArgumentSourceSets array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromArgumentSourceSets(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ARGUMENTSOURCESETS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Factors array. This is achieved by marking the element for removal.
   */
  public void removeFromFactors(entity.RateTableColumn element) {
    __getInternalInterface().removeArrayElement(FACTORS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Factors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFactors(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(FACTORS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
   */
  public void removeFromMatchOps(entity.RateTableMatchOp element) {
    __getInternalInterface().removeArrayElement(MATCHOPS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMatchOps(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(MATCHOPS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the ArgumentSourceSets field.
   */
  public void setArgumentSourceSets(entity.RateTableArgumentSourceSet[] value) {
    __getInternalInterface().setFieldValue(ARGUMENTSOURCESETS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
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
   * Sets the value of the EntityName field.
   */
  public void setEntityName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ENTITYNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Factors field.
   */
  public void setFactors(entity.RateTableColumn[] value) {
    __getInternalInterface().setFieldValue(FACTORS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MatchOps field.
   */
  public void setMatchOps(entity.RateTableMatchOp[] value) {
    __getInternalInterface().setFieldValue(MATCHOPS_PROP.get(), value);
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
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TableCode field.
   */
  public void setTableCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TABLECODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TableDesc field.
   */
  public void setTableDesc(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TABLEDESC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TableDesc_L10N_ARRAY field.
   */
  private void setTableDesc_L10N_ARRAY(entity.RateTableDefinition_TableDesc_L10N[] value) {
    __getInternalInterface().setFieldValue(TABLEDESC_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key TableDesc_ on array TableDesc_L10N_ARRAY
   */
  public void setTableDesc_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("TableDesc_en_US"), value);
  }
  
  /**
   * Sets the value of the TableName field.
   */
  public void setTableName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TABLENAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TableName_L10N_ARRAY field.
   */
  private void setTableName_L10N_ARRAY(entity.RateTableDefinition_TableName_L10N[] value) {
    __getInternalInterface().setFieldValue(TABLENAME_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key TableName_ on array TableName_L10N_ARRAY
   */
  public void setTableName_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("TableName_en_US"), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RateTableDefinitionInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RateTableDefinition.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the ArgumentSourceSets array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToArgumentSourceSets(entity.RateTableArgumentSourceSet element) {
      __getInternalInterface().addArrayElement(ARGUMENTSOURCESETS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Factors array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToFactors(entity.RateTableColumn element) {
      __getInternalInterface().addArrayElement(FACTORS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the MatchOps array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToMatchOps(entity.RateTableMatchOp element) {
      __getInternalInterface().addArrayElement(MATCHOPS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the TableDesc_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTableDesc_L10N_ARRAY(entity.RateTableDefinition_TableDesc_L10N element) {
      __getInternalInterface().addArrayElement(TABLEDESC_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the TableName_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTableName_L10N_ARRAY(entity.RateTableDefinition_TableName_L10N element) {
      __getInternalInterface().addArrayElement(TABLENAME_L10N_ARRAY_PROP.get(), element);
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
     * Gets the value of the ArgumentSourceSets field.
     * The Parameter Sets for this Table.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableArgumentSourceSet[] getArgumentSourceSets() {
      return (entity.RateTableArgumentSourceSet[])__getInternalInterface().getFieldValue(ARGUMENTSOURCESETS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Get the precision for a given column on the RateTableDefinition's row entity,
     * Will return an integer iff (1) the name matches a column on the entity, and
     * (2) the column is a datatype that has a defined precision.
     * @param columnName name of the column we're interested in
     * @return database precision for the named column, or null if none
     */
    public java.lang.Integer getColumnPrecision(java.lang.String columnName) {
      return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getColumnPrecision(columnName);
    }
    
    /**
     * Get the scale for a given column on the RateTableDefinition's row entity,
     * Will return an integer iff (1) the name matches a column on the entity, and
     * (2) the column is a datatype that has a defined scale.
     * @param columnName name of the column we're interested in
     * @return database scale for the named column, or null if none
     */
    public java.lang.Integer getColumnScale(java.lang.String columnName) {
      return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getColumnScale(columnName);
    }
    
    /**
     * Evaluate whether FactorRowEntity has a covering index (an index which, at a minimum, contains the foreign key
     * to the rate table, and all parameters.  The fastest-performing index will also contain the factors, because
     * it allows the database to return the desired result without having to retrieve rows.
     * @return a value in the enum CoveringIndexType describing how thoroughly the FactorRowEntity is indexed.
     */
    public gw.pc.rating.entity.CoveringIndexType getCoveringIndexType() {
      return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getCoveringIndexType();
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
     * Gets the value of the EntityName field.
     * Name of the physical table that will hold the data for this table.        This may be empty when using the generic physical table rather than a custom one,      although this field can optionally contain the generic physical table's name when using it.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getEntityName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ENTITYNAME_PROP.get());
    }
    
    /**
     * Gets the value of the Factors field.
     * The list of factor definitions for this table
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableColumn[] getFactors() {
      return (entity.RateTableColumn[])__getInternalInterface().getFieldValue(FACTORS_PROP.get());
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
     * Gets the value of the MatchOps field.
     * The list of matching operations for this rate table
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableMatchOp[] getMatchOps() {
      return (entity.RateTableMatchOp[])__getInternalInterface().getFieldValue(MATCHOPS_PROP.get());
    }
    
    /**
     * Get the match op with the given name, or null if no match.
     * Implementation should be free to cache the mapping from name to matchop.
     * @param name The name of the desired matchop
     * @return the RateTableMatchOp whose name matches the given name
     */
    public entity.RateTableMatchOp getNamedMatchOp(java.lang.String name) {
      return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getNamedMatchOp(name);
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Get the match operations, sorted by SortOrder of their first parameter.
     * Implementation should be free to cache this result.
     * @return this.MatchOps, sorted by the first parameter's sort order
     */
    public entity.RateTableMatchOp[] getSortedMatchOpArray() {
      return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getSortedMatchOpArray();
    }
    
    /**
     * Get the match operations, sorted by SortOrder of their first parameter.
     * Implementation should be free to cache this result.
     * @return this.MatchOps, sorted by the first parameter's sort order
     */
    public java.util.List<entity.RateTableMatchOp> getSortedMatchOps() {
      return ((com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods")).getSortedMatchOps();
    }
    
    /**
     * Gets the value of the TableCode field.
     * The rate table code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTableCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TABLECODE_PROP.get());
    }
    
    /**
     * Gets the value of the TableDesc field.
     * Description of the rate data that is stored by this table
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTableDesc() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TABLEDESC_PROP.get());
    }
    
    /**
     * Gets the value of the TableDesc_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableDefinition_TableDesc_L10N[] getTableDesc_L10N_ARRAY() {
      return (entity.RateTableDefinition_TableDesc_L10N[])__getInternalInterface().getFieldValue(TABLEDESC_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition TableDesc_L10N_ARRAYByLanguage on array TableDesc_L10N_ARRAY
     */
    public entity.RateTableDefinition_TableDesc_L10N getTableDesc_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.RateTableDefinition_TableDesc_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the TableName field.
     * The logical name of the rate table. Note: The rating data is stored in a separate physical table
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTableName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TABLENAME_PROP.get());
    }
    
    /**
     * Gets the value of the TableName_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableDefinition_TableName_L10N[] getTableName_L10N_ARRAY() {
      return (entity.RateTableDefinition_TableName_L10N[])__getInternalInterface().getFieldValue(TABLENAME_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition TableName_L10N_ARRAYByLanguage on array TableName_L10N_ARRAY
     */
    public entity.RateTableDefinition_TableName_L10N getTableName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.RateTableDefinition_TableName_L10N)__getInternalInterface().getAssociativeArrayValue(property);
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
     * Removes the given element from the ArgumentSourceSets array. This is achieved by marking the element for removal.
     */
    public void removeFromArgumentSourceSets(entity.RateTableArgumentSourceSet element) {
      __getInternalInterface().removeArrayElement(ARGUMENTSOURCESETS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ArgumentSourceSets array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromArgumentSourceSets(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ARGUMENTSOURCESETS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Factors array. This is achieved by marking the element for removal.
     */
    public void removeFromFactors(entity.RateTableColumn element) {
      __getInternalInterface().removeArrayElement(FACTORS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Factors array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromFactors(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(FACTORS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
     */
    public void removeFromMatchOps(entity.RateTableMatchOp element) {
      __getInternalInterface().removeArrayElement(MATCHOPS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromMatchOps(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(MATCHOPS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the TableDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromTableDesc_L10N_ARRAY(entity.RateTableDefinition_TableDesc_L10N element) {
      __getInternalInterface().removeArrayElement(TABLEDESC_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the TableDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTableDesc_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TABLEDESC_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the TableName_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromTableName_L10N_ARRAY(entity.RateTableDefinition_TableName_L10N element) {
      __getInternalInterface().removeArrayElement(TABLENAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the TableName_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTableName_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TABLENAME_L10N_ARRAY_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ArgumentSourceSets field.
     */
    public void setArgumentSourceSets(entity.RateTableArgumentSourceSet[] value) {
      __getInternalInterface().setFieldValue(ARGUMENTSOURCESETS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
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
     * Sets the value of the EntityName field.
     */
    public void setEntityName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ENTITYNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Factors field.
     */
    public void setFactors(entity.RateTableColumn[] value) {
      __getInternalInterface().setFieldValue(FACTORS_PROP.get(), value);
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
     * Sets the value of the MatchOps field.
     */
    public void setMatchOps(entity.RateTableMatchOp[] value) {
      __getInternalInterface().setFieldValue(MATCHOPS_PROP.get(), value);
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
     * Sets the value of the TableCode field.
     */
    public void setTableCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TABLECODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TableDesc field.
     */
    public void setTableDesc(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TABLEDESC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TableDesc_L10N_ARRAY field.
     */
    public void setTableDesc_L10N_ARRAY(entity.RateTableDefinition_TableDesc_L10N[] value) {
      __getInternalInterface().setFieldValue(TABLEDESC_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TableName field.
     */
    public void setTableName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TABLENAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TableName_L10N_ARRAY field.
     */
    public void setTableName_L10N_ARRAY(entity.RateTableDefinition_TableName_L10N[] value) {
      __getInternalInterface().setFieldValue(TABLENAME_L10N_ARRAY_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods", "com.guidewire.pc.domain.rating.impl.RateTableDefinitionImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RateTableDefinition.class, config);
    com.guidewire._generated.entity.RateTableDefinitionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RateTableDefinition, com.guidewire._generated.entity.RateTableDefinitionInternal>() {
      public java.lang.Object getImplementation(entity.RateTableDefinition bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RateTableDefinitionInternal getInternalInterface(entity.RateTableDefinition bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RateTableDefinition newEmptyInstance() {
        return new entity.RateTableDefinition((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}