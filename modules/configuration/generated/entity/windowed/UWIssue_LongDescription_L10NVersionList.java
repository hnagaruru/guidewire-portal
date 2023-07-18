package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssue_LongDescription_L10N.eti;UWIssue_LongDescription_L10N.eix;UWIssue_LongDescription_L10N.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface UWIssue_LongDescription_L10NVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.UWIssue_LongDescription_L10N AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.UWIssue_LongDescription_L10N> getAllVersions();
  
  
  
}