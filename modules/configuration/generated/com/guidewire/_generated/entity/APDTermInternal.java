package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDTerm.eti;APDTerm.eix;APDTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDTermInternal extends com.guidewire._generated.entity.APDAttributeInternal {
  /**
   * Adds the given element to the DropdownColumns array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDropdownColumns(entity.APDDropdownColumn element);
  
  
  /**
   * Gets the value of the Clause field.
   * The clause to which this term belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause getClause();
  
  
  public gw.pl.persistence.core.Key getClauseID();
  
  
  /**
   * Gets the value of the DropdownColumns field.
   * The columns of values associated with dropdown entries
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownColumn[] getDropdownColumns();
  
  
  /**
   * Gets the value of the GenerateAsClauseTerm field.
   * If true and ScheduleItemAttribute is also true, this attribute will be generated as a linked clause term, otherwise, it will become a scheduled item property on the clause.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isGenerateAsClauseTerm();
  
  
  /**
   * Gets the value of the ScheduleItemAttribute field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isScheduleItemAttribute();
  
  
  /**
   * Removes the given element from the DropdownColumns array. This is achieved by marking the element for removal.
   */
  public void removeFromDropdownColumns(entity.APDDropdownColumn element);
  
  
  /**
   * Removes the given element from the DropdownColumns array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDropdownColumns(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Clause field.
   */
  public void setClause(entity.APDClause value);
  
  
  public void setClauseID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DropdownColumns field.
   */
  public void setDropdownColumns(entity.APDDropdownColumn[] value);
  
  
  /**
   * Sets the value of the GenerateAsClauseTerm field.
   */
  public void setGenerateAsClauseTerm(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ScheduleItemAttribute field.
   */
  public void setScheduleItemAttribute(java.lang.Boolean value);
  
  
  
}