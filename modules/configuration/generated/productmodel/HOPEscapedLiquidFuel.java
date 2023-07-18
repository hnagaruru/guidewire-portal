package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPEscapedLiquidFuel.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPEscapedLiquidFuel extends entity.HOPDwellingCov {
  protected HOPEscapedLiquidFuel()  {
    super((java.lang.Void)null);
  }
  
  public HOPEscapedLiquidFuel(entity.PolicyPeriod branch)  {
    super(branch, "zb4iiqcl6a21b0grb6aamorc4ca");
  }
  
  public HOPEscapedLiquidFuel(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zb4iiqcl6a21b0grb6aamorc4ca");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPEscapedLiquidFuelInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPEscapedLiquidFuel>() {
      public productmodel.HOPEscapedLiquidFuel newEmptyInstance() {
        return new productmodel.HOPEscapedLiquidFuel();
      }
      
      
    });
  }
}