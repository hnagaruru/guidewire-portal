package entity;

/**
 * Lookup
 * Delegate defining the base, non-negotiable fields, all lookup entities must have.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Lookup.eti;Lookup.eix;Lookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Lookup extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Lookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Lookup>("entity.Lookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENDEFFECTIVEDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("EndEffectiveDate", "EndEffectiveDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOOKUPTABLECODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("LookupTableCode", "LookupTableCode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STARTEFFECTIVEDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StartEffectiveDate", "StartEffectiveDate");
  
  /**
   * Gets the value of the EndEffectiveDate field.
   * The last day, exclusive, the rule is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndEffectiveDate();
  
  
  /**
   * Gets the value of the LookupTableCode field.
   * The code of the LookupTable that contains this lookup
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLookupTableCode();
  
  
  /**
   * Gets the value of the StartEffectiveDate field.
   * The first day, inclusive, the rule is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartEffectiveDate();
  
  
  /**
   * Sets the value of the EndEffectiveDate field.
   */
  public void setEndEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LookupTableCode field.
   */
  public void setLookupTableCode(java.lang.String value);
  
  
  /**
   * Sets the value of the StartEffectiveDate field.
   */
  public void setStartEffectiveDate(java.util.Date value);
  
  
  
}