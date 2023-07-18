package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssue_LongDescription_L10N.eti;UWIssue_LongDescription_L10N.eix;UWIssue_LongDescription_L10N.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class UWIssue_LongDescription_L10NVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.UWIssue_LongDescription_L10NVersionList {
  public UWIssue_LongDescription_L10NVersionListImpl(entity.UWIssue_LongDescription_L10N base)  {
    super(base);
  }
  
  public UWIssue_LongDescription_L10NVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.UWIssue_LongDescription_L10N AsOf(java.util.Date date) {
    return (entity.UWIssue_LongDescription_L10N)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.UWIssue_LongDescription_L10N> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}