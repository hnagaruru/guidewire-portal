package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPWorkersCompensation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPWorkersCompensation extends entity.HOPDwellingCov {
  protected HOPWorkersCompensation()  {
    super((java.lang.Void)null);
  }
  
  public HOPWorkersCompensation(entity.PolicyPeriod branch)  {
    super(branch, "zrcjqe5k1gu1ic8sbend4tpb1gb");
  }
  
  public HOPWorkersCompensation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zrcjqe5k1gu1ic8sbend4tpb1gb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPWorkersCompensationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPWorkersCompensation>() {
      public productmodel.HOPWorkersCompensation newEmptyInstance() {
        return new productmodel.HOPWorkersCompensation();
      }
      
      
    });
  }
}