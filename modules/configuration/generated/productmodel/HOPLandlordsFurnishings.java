package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPLandlordsFurnishings.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPLandlordsFurnishings extends entity.HOPDwellingCov {
  protected HOPLandlordsFurnishings()  {
    super((java.lang.Void)null);
  }
  
  public HOPLandlordsFurnishings(entity.PolicyPeriod branch)  {
    super(branch, "z0ui0qal30ijg7f24ndprcj356b");
  }
  
  public HOPLandlordsFurnishings(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z0ui0qal30ijg7f24ndprcj356b");
  }
  
  public productmodel.OptionHOPLandlordsFurnishingsLimitType getHOPLandlordsFurnishingsLimitTerm() {
    return (productmodel.OptionHOPLandlordsFurnishingsLimitType)getCovTerm("z6ki2rhsse7lf631h8n130pj0d8");
  }
  
  public boolean getHasHOPLandlordsFurnishingsLimitTerm() {
    return hasCovTerm("z6ki2rhsse7lf631h8n130pj0d8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPLandlordsFurnishingsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPLandlordsFurnishings>() {
      public productmodel.HOPLandlordsFurnishings newEmptyInstance() {
        return new productmodel.HOPLandlordsFurnishings();
      }
      
      
    });
  }
}