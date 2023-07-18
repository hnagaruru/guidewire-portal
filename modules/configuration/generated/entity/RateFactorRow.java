package entity;

/**
 * RateFactorRow
 * This table stores the factors used in rating calculations. It is a catch-all type of table.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateFactorRow.eti;RateFactorRow.eix;RateFactorRow.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RateFactorRow")
public class RateFactorRow extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RateFactorRow> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RateFactorRow>("entity.RateFactorRow");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RATETABLE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RateTable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BIT1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "bit1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BIT2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "bit2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATE1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "date1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATE2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "date2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEC1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "dec1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEC2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "dec2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEC3_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "dec3");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEC4_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "dec4");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEC5_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "dec5");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEC6_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "dec6");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INT1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "int1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INT2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "int2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INT3_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "int3");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INT4_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "int4");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INT5_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "int5");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INT6_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "int6");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INT7_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "int7");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INT8_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "int8");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STR1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "str1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STR2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "str2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STR3_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "str3");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STR4_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "str4");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STR5_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "str5");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STR6_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "str6");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STR7_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "str7");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STR8_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "str8");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RateFactorRowInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RateFactorRow()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RateFactorRow(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RateFactorRow(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RateFactorRowInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RateFactorRowInternal __getInternalInterface() {
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RateTable field.
   * Logical rate table that contain the factors with these values
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable getRateTable() {
    return (entity.RateTable)__getInternalInterface().getFieldValue(RATETABLE_PROP.get());
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
  public typekey.RateFactorRow getSubtype() {
    return (typekey.RateFactorRow)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
   * Gets the value of the date1 field.
   * Date 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getdate1() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATE1_PROP.get());
  }
  
  /**
   * Gets the value of the date2 field.
   * Date 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getdate2() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATE2_PROP.get());
  }
  
  /**
   * Gets the value of the dec1 field.
   * Decimal 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec1() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC1_PROP.get());
  }
  
  /**
   * Gets the value of the dec2 field.
   * Decimal 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec2() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC2_PROP.get());
  }
  
  /**
   * Gets the value of the dec3 field.
   * Decimal 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec3() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC3_PROP.get());
  }
  
  /**
   * Gets the value of the dec4 field.
   * Decimal 4
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec4() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC4_PROP.get());
  }
  
  /**
   * Gets the value of the dec5 field.
   * Decimal 5
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec5() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC5_PROP.get());
  }
  
  /**
   * Gets the value of the dec6 field.
   * Decimal 6
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getdec6() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC6_PROP.get());
  }
  
  /**
   * Gets the value of the int1 field.
   * Integer 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint1() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INT1_PROP.get());
  }
  
  /**
   * Gets the value of the int2 field.
   * Integer 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint2() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INT2_PROP.get());
  }
  
  /**
   * Gets the value of the int3 field.
   * Integer 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint3() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INT3_PROP.get());
  }
  
  /**
   * Gets the value of the int4 field.
   * Integer 4
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint4() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INT4_PROP.get());
  }
  
  /**
   * Gets the value of the int5 field.
   * Integer 5
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint5() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INT5_PROP.get());
  }
  
  /**
   * Gets the value of the int6 field.
   * Integer 6
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint6() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INT6_PROP.get());
  }
  
  /**
   * Gets the value of the int7 field.
   * Integer 7
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint7() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INT7_PROP.get());
  }
  
  /**
   * Gets the value of the int8 field.
   * Integer 8
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getint8() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(INT8_PROP.get());
  }
  
  /**
   * Gets the value of the str1 field.
   * String 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr1() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR1_PROP.get());
  }
  
  /**
   * Gets the value of the str2 field.
   * String 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr2() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR2_PROP.get());
  }
  
  /**
   * Gets the value of the str3 field.
   * String 3
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr3() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR3_PROP.get());
  }
  
  /**
   * Gets the value of the str4 field.
   * String 4
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr4() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR4_PROP.get());
  }
  
  /**
   * Gets the value of the str5 field.
   * String 5
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr5() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR5_PROP.get());
  }
  
  /**
   * Gets the value of the str6 field.
   * String 6
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr6() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR6_PROP.get());
  }
  
  /**
   * Gets the value of the str7 field.
   * String 7
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr7() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR7_PROP.get());
  }
  
  /**
   * Gets the value of the str8 field.
   * String 8
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getstr8() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR8_PROP.get());
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
   * Gets the value of the bit1 field.
   * Bit 1
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isbit1() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(BIT1_PROP.get());
  }
  
  /**
   * Gets the value of the bit2 field.
   * Bit 2
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isbit2() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(BIT2_PROP.get());
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
   * Sets the value of the RateTable field.
   */
  public void setRateTable(entity.RateTable value) {
    __getInternalInterface().setFieldValue(RATETABLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.RateFactorRow value) {
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
   * Sets the value of the bit1 field.
   */
  public void setbit1(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(BIT1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the bit2 field.
   */
  public void setbit2(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(BIT2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the date1 field.
   */
  public void setdate1(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATE1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the date2 field.
   */
  public void setdate2(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATE2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the dec1 field.
   */
  public void setdec1(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEC1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the dec2 field.
   */
  public void setdec2(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEC2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the dec3 field.
   */
  public void setdec3(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEC3_PROP.get(), value);
  }
  
  /**
   * Sets the value of the dec4 field.
   */
  public void setdec4(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEC4_PROP.get(), value);
  }
  
  /**
   * Sets the value of the dec5 field.
   */
  public void setdec5(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEC5_PROP.get(), value);
  }
  
  /**
   * Sets the value of the dec6 field.
   */
  public void setdec6(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEC6_PROP.get(), value);
  }
  
  /**
   * Sets the value of the int1 field.
   */
  public void setint1(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INT1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the int2 field.
   */
  public void setint2(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INT2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the int3 field.
   */
  public void setint3(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INT3_PROP.get(), value);
  }
  
  /**
   * Sets the value of the int4 field.
   */
  public void setint4(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INT4_PROP.get(), value);
  }
  
  /**
   * Sets the value of the int5 field.
   */
  public void setint5(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INT5_PROP.get(), value);
  }
  
  /**
   * Sets the value of the int6 field.
   */
  public void setint6(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INT6_PROP.get(), value);
  }
  
  /**
   * Sets the value of the int7 field.
   */
  public void setint7(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INT7_PROP.get(), value);
  }
  
  /**
   * Sets the value of the int8 field.
   */
  public void setint8(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(INT8_PROP.get(), value);
  }
  
  /**
   * Sets the value of the str1 field.
   */
  public void setstr1(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STR1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the str2 field.
   */
  public void setstr2(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STR2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the str3 field.
   */
  public void setstr3(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STR3_PROP.get(), value);
  }
  
  /**
   * Sets the value of the str4 field.
   */
  public void setstr4(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STR4_PROP.get(), value);
  }
  
  /**
   * Sets the value of the str5 field.
   */
  public void setstr5(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STR5_PROP.get(), value);
  }
  
  /**
   * Sets the value of the str6 field.
   */
  public void setstr6(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STR6_PROP.get(), value);
  }
  
  /**
   * Sets the value of the str7 field.
   */
  public void setstr7(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STR7_PROP.get(), value);
  }
  
  /**
   * Sets the value of the str8 field.
   */
  public void setstr8(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(STR8_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RateFactorRowInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RateFactorRow.this.__getDelegateManager();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
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
     * Gets the value of the RateTable field.
     * Logical rate table that contain the factors with these values
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTable getRateTable() {
      return (entity.RateTable)__getInternalInterface().getFieldValue(RATETABLE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRateTableID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RATETABLE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RateFactorRow getSubtype() {
      return (typekey.RateFactorRow)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
    
    /**
     * Gets the value of the date1 field.
     * Date 1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getdate1() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATE1_PROP.get());
    }
    
    /**
     * Gets the value of the date2 field.
     * Date 2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getdate2() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATE2_PROP.get());
    }
    
    /**
     * Gets the value of the dec1 field.
     * Decimal 1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getdec1() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC1_PROP.get());
    }
    
    /**
     * Gets the value of the dec2 field.
     * Decimal 2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getdec2() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC2_PROP.get());
    }
    
    /**
     * Gets the value of the dec3 field.
     * Decimal 3
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getdec3() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC3_PROP.get());
    }
    
    /**
     * Gets the value of the dec4 field.
     * Decimal 4
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getdec4() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC4_PROP.get());
    }
    
    /**
     * Gets the value of the dec5 field.
     * Decimal 5
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getdec5() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC5_PROP.get());
    }
    
    /**
     * Gets the value of the dec6 field.
     * Decimal 6
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getdec6() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEC6_PROP.get());
    }
    
    /**
     * Gets the value of the int1 field.
     * Integer 1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getint1() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INT1_PROP.get());
    }
    
    /**
     * Gets the value of the int2 field.
     * Integer 2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getint2() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INT2_PROP.get());
    }
    
    /**
     * Gets the value of the int3 field.
     * Integer 3
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getint3() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INT3_PROP.get());
    }
    
    /**
     * Gets the value of the int4 field.
     * Integer 4
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getint4() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INT4_PROP.get());
    }
    
    /**
     * Gets the value of the int5 field.
     * Integer 5
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getint5() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INT5_PROP.get());
    }
    
    /**
     * Gets the value of the int6 field.
     * Integer 6
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getint6() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INT6_PROP.get());
    }
    
    /**
     * Gets the value of the int7 field.
     * Integer 7
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getint7() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INT7_PROP.get());
    }
    
    /**
     * Gets the value of the int8 field.
     * Integer 8
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getint8() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(INT8_PROP.get());
    }
    
    /**
     * Gets the value of the str1 field.
     * String 1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstr1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR1_PROP.get());
    }
    
    /**
     * Gets the value of the str2 field.
     * String 2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstr2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR2_PROP.get());
    }
    
    /**
     * Gets the value of the str3 field.
     * String 3
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstr3() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR3_PROP.get());
    }
    
    /**
     * Gets the value of the str4 field.
     * String 4
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstr4() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR4_PROP.get());
    }
    
    /**
     * Gets the value of the str5 field.
     * String 5
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstr5() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR5_PROP.get());
    }
    
    /**
     * Gets the value of the str6 field.
     * String 6
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstr6() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR6_PROP.get());
    }
    
    /**
     * Gets the value of the str7 field.
     * String 7
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstr7() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR7_PROP.get());
    }
    
    /**
     * Gets the value of the str8 field.
     * String 8
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getstr8() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(STR8_PROP.get());
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
    
    /**
     * Gets the value of the bit1 field.
     * Bit 1
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isbit1() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BIT1_PROP.get());
    }
    
    /**
     * Gets the value of the bit2 field.
     * Bit 2
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isbit2() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(BIT2_PROP.get());
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
     * Sets the value of the RateTable field.
     */
    public void setRateTable(entity.RateTable value) {
      __getInternalInterface().setFieldValue(RATETABLE_PROP.get(), value);
    }
    
    public void setRateTableID(gw.pl.persistence.core.Key value) {
      setFieldValue(RATETABLE_PROP.get(), value);
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
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.RateFactorRow value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
     * Sets the value of the bit1 field.
     */
    public void setbit1(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BIT1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the bit2 field.
     */
    public void setbit2(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(BIT2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the date1 field.
     */
    public void setdate1(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATE1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the date2 field.
     */
    public void setdate2(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATE2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the dec1 field.
     */
    public void setdec1(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEC1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the dec2 field.
     */
    public void setdec2(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEC2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the dec3 field.
     */
    public void setdec3(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEC3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the dec4 field.
     */
    public void setdec4(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEC4_PROP.get(), value);
    }
    
    /**
     * Sets the value of the dec5 field.
     */
    public void setdec5(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEC5_PROP.get(), value);
    }
    
    /**
     * Sets the value of the dec6 field.
     */
    public void setdec6(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEC6_PROP.get(), value);
    }
    
    /**
     * Sets the value of the int1 field.
     */
    public void setint1(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INT1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the int2 field.
     */
    public void setint2(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INT2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the int3 field.
     */
    public void setint3(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INT3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the int4 field.
     */
    public void setint4(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INT4_PROP.get(), value);
    }
    
    /**
     * Sets the value of the int5 field.
     */
    public void setint5(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INT5_PROP.get(), value);
    }
    
    /**
     * Sets the value of the int6 field.
     */
    public void setint6(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INT6_PROP.get(), value);
    }
    
    /**
     * Sets the value of the int7 field.
     */
    public void setint7(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INT7_PROP.get(), value);
    }
    
    /**
     * Sets the value of the int8 field.
     */
    public void setint8(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(INT8_PROP.get(), value);
    }
    
    /**
     * Sets the value of the str1 field.
     */
    public void setstr1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STR1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the str2 field.
     */
    public void setstr2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STR2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the str3 field.
     */
    public void setstr3(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STR3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the str4 field.
     */
    public void setstr4(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STR4_PROP.get(), value);
    }
    
    /**
     * Sets the value of the str5 field.
     */
    public void setstr5(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STR5_PROP.get(), value);
    }
    
    /**
     * Sets the value of the str6 field.
     */
    public void setstr6(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STR6_PROP.get(), value);
    }
    
    /**
     * Sets the value of the str7 field.
     */
    public void setstr7(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STR7_PROP.get(), value);
    }
    
    /**
     * Sets the value of the str8 field.
     */
    public void setstr8(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(STR8_PROP.get(), value);
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RateFactorRow.class, config);
    com.guidewire._generated.entity.RateFactorRowInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RateFactorRow, com.guidewire._generated.entity.RateFactorRowInternal>() {
      public java.lang.Object getImplementation(entity.RateFactorRow bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RateFactorRowInternal getInternalInterface(entity.RateFactorRow bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RateFactorRow newEmptyInstance() {
        return new entity.RateFactorRow((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}