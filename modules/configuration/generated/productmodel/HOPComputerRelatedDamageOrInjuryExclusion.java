package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPComputerRelatedDamageOrInjuryExclusion.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPComputerRelatedDamageOrInjuryExclusion extends entity.HOPLineExcl {
  protected HOPComputerRelatedDamageOrInjuryExclusion()  {
    super((java.lang.Void)null);
  }
  
  public HOPComputerRelatedDamageOrInjuryExclusion(entity.PolicyPeriod branch)  {
    super(branch, "z6sh4d0oj334q2h4qn72ostqmi8");
  }
  
  public HOPComputerRelatedDamageOrInjuryExclusion(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z6sh4d0oj334q2h4qn72ostqmi8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPComputerRelatedDamageOrInjuryExclusionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPComputerRelatedDamageOrInjuryExclusion>() {
      public productmodel.HOPComputerRelatedDamageOrInjuryExclusion newEmptyInstance() {
        return new productmodel.HOPComputerRelatedDamageOrInjuryExclusion();
      }
      
      
    });
  }
}