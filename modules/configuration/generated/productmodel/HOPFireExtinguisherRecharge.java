package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPFireExtinguisherRecharge.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPFireExtinguisherRecharge extends entity.HOPDwellingCov {
  protected HOPFireExtinguisherRecharge()  {
    super((java.lang.Void)null);
  }
  
  public HOPFireExtinguisherRecharge(entity.PolicyPeriod branch)  {
    super(branch, "z7lhomv5qqndfdnsr9680bb1hq9");
  }
  
  public HOPFireExtinguisherRecharge(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z7lhomv5qqndfdnsr9680bb1hq9");
  }
  
  public productmodel.OptionHOPFireExtinguisherRechargeLimitType getHOPFireExtinguisherRechargeLimitTerm() {
    return (productmodel.OptionHOPFireExtinguisherRechargeLimitType)getCovTerm("zsnjkur9omblc1n30gaj2ak50f9");
  }
  
  public boolean getHasHOPFireExtinguisherRechargeLimitTerm() {
    return hasCovTerm("zsnjkur9omblc1n30gaj2ak50f9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPFireExtinguisherRechargeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPFireExtinguisherRecharge>() {
      public productmodel.HOPFireExtinguisherRecharge newEmptyInstance() {
        return new productmodel.HOPFireExtinguisherRecharge();
      }
      
      
    });
  }
}