package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAAudVisDataEqip2Cov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAAudVisDataEqip2Cov extends entity.BusinessVehicleCov {
  protected BAAudVisDataEqip2Cov()  {
    super((java.lang.Void)null);
  }
  
  public BAAudVisDataEqip2Cov(entity.PolicyPeriod branch)  {
    super(branch, "BAAudVisDataEqip2Cov");
  }
  
  public BAAudVisDataEqip2Cov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAAudVisDataEqip2Cov");
  }
  
  public productmodel.OptionBAAudVisDataEquipDedType getBAAudVisDataEquipDedTerm() {
    return (productmodel.OptionBAAudVisDataEquipDedType)getCovTerm("BAAudVisDataEquipDed");
  }
  
  public productmodel.DirectBAAudVisDataEquipLimType getBAAudVisDataEquipLimTerm() {
    return (productmodel.DirectBAAudVisDataEquipLimType)getCovTerm("BAAudVisDataEquipLim");
  }
  
  public boolean getHasBAAudVisDataEquipDedTerm() {
    return hasCovTerm("BAAudVisDataEquipDed");
  }
  
  public boolean getHasBAAudVisDataEquipLimTerm() {
    return hasCovTerm("BAAudVisDataEquipLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BAAudVisDataEqip2CovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAAudVisDataEqip2Cov>() {
      public productmodel.BAAudVisDataEqip2Cov newEmptyInstance() {
        return new productmodel.BAAudVisDataEqip2Cov();
      }
      
      
    });
  }
}