package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RuleHead.eti;RuleHead.eix;RuleHead.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RuleHeadInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the DeployedVersion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleVersion getDeployedVersion();
  
  
  public gw.pl.persistence.core.Key getDeployedVersionID();
  
  
  /**
   * Gets the value of the GlobalRuleID field.
   * The identity of a rule for which this is the unique head instance.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getGlobalRuleID();
  
  
  /**
   * Gets the value of the HeadVersion field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleVersion getHeadVersion();
  
  
  public gw.pl.persistence.core.Key getHeadVersionID();
  
  
  /**
   * Gets the value of the InProgressImportTaskEntry field.
   * In progress import entry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleImportTaskEntry getInProgressImportTaskEntry();
  
  
  public gw.pl.persistence.core.Key getInProgressImportTaskEntryID();
  
  
  /**
   * Sets the value of the DeployedVersion field.
   */
  public void setDeployedVersion(entity.RuleVersion value);
  
  
  public void setDeployedVersionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GlobalRuleID field.
   */
  public void setGlobalRuleID(java.lang.String value);
  
  
  /**
   * Sets the value of the HeadVersion field.
   */
  public void setHeadVersion(entity.RuleVersion value);
  
  
  public void setHeadVersionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InProgressImportTaskEntry field.
   */
  public void setInProgressImportTaskEntry(entity.RuleImportTaskEntry value);
  
  
  public void setInProgressImportTaskEntryID(gw.pl.persistence.core.Key value);
  
  
  
}