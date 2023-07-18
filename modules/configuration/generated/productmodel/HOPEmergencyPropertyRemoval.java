package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPEmergencyPropertyRemoval.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPEmergencyPropertyRemoval extends entity.HOPDwellingCov {
  protected HOPEmergencyPropertyRemoval()  {
    super((java.lang.Void)null);
  }
  
  public HOPEmergencyPropertyRemoval(entity.PolicyPeriod branch)  {
    super(branch, "z6vgil0u20qn9a8b8h9c24sc6eb");
  }
  
  public HOPEmergencyPropertyRemoval(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z6vgil0u20qn9a8b8h9c24sc6eb");
  }
  
  public productmodel.OptionHOPPropRemovalType getHOPPropRemovalTerm() {
    return (productmodel.OptionHOPPropRemovalType)getCovTerm("zm7hstt7p1obq7ovms6a6aok3o8");
  }
  
  public boolean getHasHOPPropRemovalTerm() {
    return hasCovTerm("zm7hstt7p1obq7ovms6a6aok3o8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPEmergencyPropertyRemovalInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPEmergencyPropertyRemoval>() {
      public productmodel.HOPEmergencyPropertyRemoval newEmptyInstance() {
        return new productmodel.HOPEmergencyPropertyRemoval();
      }
      
      
    });
  }
}