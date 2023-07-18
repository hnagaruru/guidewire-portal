package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCParticipatingPlan.eti;WCParticipatingPlan.eix;WCParticipatingPlan.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCParticipatingPlanVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCParticipatingPlan AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCParticipatingPlan> getAllVersions();
  
  
  
}