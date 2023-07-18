package entity;

/**
 * ScheduledItemClause
 * "Clauses related to a scheduled item"
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ScheduledItemClause.eti;ScheduledItemClause.eix;ScheduledItemClause.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface ScheduledItemClause extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ScheduledItemClause> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ScheduledItemClause>("entity.ScheduledItemClause");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOLEANTERM1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("BooleanTerm1", "BooleanTerm1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOLEANTERM1AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("BooleanTerm1Avl", "BooleanTerm1Avl");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICETERM1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceTerm1", "ChoiceTerm1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICETERM1AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceTerm1Avl", "ChoiceTerm1Avl");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICETERM2_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceTerm2", "ChoiceTerm2");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICETERM2AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceTerm2Avl", "ChoiceTerm2Avl");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICETERM3_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceTerm3", "ChoiceTerm3");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICETERM3AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceTerm3Avl", "ChoiceTerm3Avl");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICETERM4_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceTerm4", "ChoiceTerm4");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHOICETERM4AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChoiceTerm4Avl", "ChoiceTerm4Avl");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATETERM1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DateTerm1", "DateTerm1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATETERM1AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DateTerm1Avl", "DateTerm1Avl");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DIRECTTERM1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DirectTerm1", "DirectTerm1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DIRECTTERM1AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DirectTerm1Avl", "DirectTerm1Avl");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DIRECTTERM2_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DirectTerm2", "DirectTerm2");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DIRECTTERM2AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DirectTerm2Avl", "DirectTerm2Avl");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGTERM1_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringTerm1", "StringTerm1");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STRINGTERM1AVL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StringTerm1Avl", "StringTerm1Avl");
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm2();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm3();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChoiceTerm4();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTerm1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDirectTerm2();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStringTerm1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm1();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanTerm1Avl();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm1Avl();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm2Avl();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm3Avl();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isChoiceTerm4Avl();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDateTerm1Avl();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm1Avl();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDirectTerm2Avl();
  
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isStringTerm1Avl();
  
  
  
}