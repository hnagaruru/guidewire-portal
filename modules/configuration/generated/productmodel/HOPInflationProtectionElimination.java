package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPInflationProtectionElimination.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPInflationProtectionElimination extends entity.HOPDwellingExcl {
  protected HOPInflationProtectionElimination()  {
    super((java.lang.Void)null);
  }
  
  public HOPInflationProtectionElimination(entity.PolicyPeriod branch)  {
    super(branch, "zv9hkqn0g5ita45pblmg1kbd5fa");
  }
  
  public HOPInflationProtectionElimination(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zv9hkqn0g5ita45pblmg1kbd5fa");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPInflationProtectionEliminationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPInflationProtectionElimination>() {
      public productmodel.HOPInflationProtectionElimination newEmptyInstance() {
        return new productmodel.HOPInflationProtectionElimination();
      }
      
      
    });
  }
}