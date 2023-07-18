package entity;

/**
 * ScheduledItem
 * A scheduled item
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ScheduledItem.eti;ScheduledItem.eix;ScheduledItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface ScheduledItem extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ScheduledItem> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ScheduledItem>("entity.ScheduledItem");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOLCOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("BoolCol1", "BoolCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOLCOL2_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("BoolCol2", "BoolCol2");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATECOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DateCol1", "DateCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INTCOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("IntCol1", "IntCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> NAMEDINSURED_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("NamedInsured", "NamedInsured");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYLOCATION_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("PolicyLocation", "PolicyLocation");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSINTCOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PosIntCol1", "PosIntCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SCHEDULENUMBER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ScheduleNumber", "ScheduleNumber");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringCol1", "StringCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL2_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringCol2", "StringCol2");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL3_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringCol3", "StringCol3");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGCOL4_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringCol4", "StringCol4");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TYPEKEYCOL1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("TypeKeyCol1", "TypeKeyCol1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TYPEKEYCOL2_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("TypeKeyCol2", "TypeKeyCol2");
  
  /**
   * 
   * @return the <code>Clause</code> associated with this scheduled item.
   * @deprecated (PC 8.0.6) use the method {@link #getClause(ClausePattern pattern)} instead
   */
  public entity.Clause getClause();
  
  
  /**
   * 
   * @param pattern 
   * @return the <code>Clause</code> by clause pattern associated with this scheduled item.
   */
  public entity.Clause getClause(gw.api.productmodel.ClausePattern pattern);
  
  
  /**
   * 
   * @return the <code>Clause[]</code> associated with this scheduled item.
   */
  public entity.Clause[] getClauses();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateCol1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getIntCol1();
  
  
  /**
   * Gets the value of the NamedInsured field.
   * NamedInsured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyNamedInsured getNamedInsured();
  
  
  /**
   * Gets the value of the PolicyLocation field.
   * Policy Location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getPolicyLocation();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getPosIntCol1();
  
  
  /**
   * Gets the value of the ScheduleNumber field.
   * Schedule number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getScheduleNumber();
  
  
  /**
   * The parent of this ScheduleItem.
   * @return parent of this scheduled item
   */
  public gw.api.domain.Schedule getScheduleParent();
  
  
  /**
   * Returns a label for this ScheduledItem, consisting of the ScheduledItem display name followed by the value of the
   * ScheduledItem's most descriptive property if it exists.
   */
  public java.lang.String getScheduledItemEntityLabel();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol2();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol3();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringCol4();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeKeyCol1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeKeyCol2();
  
  
  /**
   * True if this scheduled has a Coverage, PolicyCondition, or Exclusion associated with it.
   * @return true if this scheduled item has a coverage, policy condition, or exclusion
   * associated with it
   * @deprecated (PC 8.0.6) use the method {@link #hasClause(ClausePattern pattern)} instead
   */
  public boolean hasClause();
  
  
  /**
   * True if this scheduled has a Coverage, PolicyCondition, or Exclusion by clause pattern associated with it.
   * @param pattern 
   * @return true if this scheduled item has a coverage, policy condition, or exclusion
   * associated with it
   */
  public boolean hasClause(gw.api.productmodel.ClausePattern pattern);
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBoolCol1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBoolCol2();
  
  
  /**
   * Sets the value of the NamedInsured field.
   */
  public void setNamedInsured(entity.PolicyNamedInsured value);
  
  
  /**
   * Sets the value of the PolicyLocation field.
   */
  public void setPolicyLocation(entity.PolicyLocation value);
  
  
  /**
   * Sets the value of the ScheduleNumber field.
   */
  public void setScheduleNumber(java.lang.Integer value);
  
  
  
}