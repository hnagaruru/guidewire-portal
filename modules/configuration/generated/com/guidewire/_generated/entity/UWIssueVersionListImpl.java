package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssue.eti;UWIssue.eix;UWIssue.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class UWIssueVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.UWIssueVersionList {
  public UWIssueVersionListImpl(entity.UWIssue base)  {
    super(base);
  }
  
  public UWIssueVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.UWIssue AsOf(java.util.Date date) {
    return (entity.UWIssue)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.UWIssue_LongDescription_L10N> LongDescription_L10N_ARRAYAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.UWIssue.LONGDESCRIPTION_L10N_ARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.UWIssue_ShortDescription_L10N> ShortDescription_L10N_ARRAYAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.UWIssue.SHORTDESCRIPTION_L10N_ARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToLongDescription_L10N_ARRAY(entity.UWIssue_LongDescription_L10N bean) {
    addToArray(entity.UWIssue.LONGDESCRIPTION_L10N_ARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToShortDescription_L10N_ARRAY(entity.UWIssue_ShortDescription_L10N bean) {
    addToArray(entity.UWIssue.SHORTDESCRIPTION_L10N_ARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.UWIssue> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.UWIssue_LongDescription_L10NVersionList> getLongDescription_L10N_ARRAY() {
    return (java.util.List)getArray(entity.UWIssue.LONGDESCRIPTION_L10N_ARRAY_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.UWIssue_ShortDescription_L10NVersionList> getShortDescription_L10N_ARRAY() {
    return (java.util.List)getArray(entity.UWIssue.SHORTDESCRIPTION_L10N_ARRAY_PROP.get());
  }
  
  
}