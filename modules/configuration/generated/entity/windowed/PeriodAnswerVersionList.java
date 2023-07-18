package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PeriodAnswer.eti;PeriodAnswer.eix;PeriodAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PeriodAnswerVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PeriodAnswer AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PeriodAnswer> getAllVersions();
  
  
  
}