package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssue.eti;UWIssue.eix;UWIssue.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface UWIssueVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.UWIssue AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.UWIssue_LongDescription_L10N> LongDescription_L10N_ARRAYAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.UWIssue_ShortDescription_L10N> ShortDescription_L10N_ARRAYAsOf(java.util.Date date);
  
  
  void addToLongDescription_L10N_ARRAY(entity.UWIssue_LongDescription_L10N bean);
  
  
  void addToShortDescription_L10N_ARRAY(entity.UWIssue_ShortDescription_L10N bean);
  
  
  java.util.List<? extends entity.UWIssue> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.UWIssue_LongDescription_L10NVersionList> getLongDescription_L10N_ARRAY();
  
  
  java.util.List<? extends entity.windowed.UWIssue_ShortDescription_L10NVersionList> getShortDescription_L10N_ARRAY();
  
  
  
}