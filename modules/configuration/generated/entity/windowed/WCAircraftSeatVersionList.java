package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCAircraftSeat.eti;WCAircraftSeat.eix;WCAircraftSeat.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCAircraftSeatVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCAircraftSeat AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCAircraftSeat> getAllVersions();
  
  
  
}