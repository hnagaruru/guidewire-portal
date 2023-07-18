package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPGraveMarkers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPGraveMarkers extends entity.HOPDwellingCov {
  protected HOPGraveMarkers()  {
    super((java.lang.Void)null);
  }
  
  public HOPGraveMarkers(entity.PolicyPeriod branch)  {
    super(branch, "ze3gohh5o7209812gfah4cs0ed8");
  }
  
  public HOPGraveMarkers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ze3gohh5o7209812gfah4cs0ed8");
  }
  
  public productmodel.OptionHOPGraveMarkersLimitType getHOPGraveMarkersLimitTerm() {
    return (productmodel.OptionHOPGraveMarkersLimitType)getCovTerm("zochcqdagct1lcav18gldrn6kqb");
  }
  
  public boolean getHasHOPGraveMarkersLimitTerm() {
    return hasCovTerm("zochcqdagct1lcav18gldrn6kqb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPGraveMarkersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPGraveMarkers>() {
      public productmodel.HOPGraveMarkers newEmptyInstance() {
        return new productmodel.HOPGraveMarkers();
      }
      
      
    });
  }
}