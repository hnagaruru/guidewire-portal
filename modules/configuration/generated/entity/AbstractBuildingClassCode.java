package entity;

/**
 * AbstractBuildingClassCode
 * Abstract building class codes.  Premium calculations are driven by class codes and both premium and losses are reported by class codes to rating bureaus.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AbstractBuildingClassCode.eti;AbstractBuildingClassCode.eix;AbstractBuildingClassCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface AbstractBuildingClassCode extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.AbstractBuildingClassCode> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.AbstractBuildingClassCode>("entity.AbstractBuildingClassCode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLASSINDICATOR_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ClassIndicator", "ClassIndicator");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Code", "Code");
  
  /**
   * Gets the value of the ClassIndicator field.
   * The Class Indicator for the class code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClassIndicator();
  
  
  /**
   * Gets the value of the Code field.
   * The Class Code for a building in a line of insurance
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Sets the value of the ClassIndicator field.
   */
  public void setClassIndicator(java.lang.String value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  
}