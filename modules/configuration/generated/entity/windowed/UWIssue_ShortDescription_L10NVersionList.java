package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssue_ShortDescription_L10N.eti;UWIssue_ShortDescription_L10N.eix;UWIssue_ShortDescription_L10N.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface UWIssue_ShortDescription_L10NVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.UWIssue_ShortDescription_L10N AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.UWIssue_ShortDescription_L10N> getAllVersions();
  
  
  
}